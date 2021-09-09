import { client } from "../axios";
import { createContext, useContext, ReactNode, useState } from "react";
import { useQuery } from "react-query";

type T_user = {
  id: number;
  name: string;
  email: string;
  created_at: Date;
};

interface I_context_data {
  data: T_user[];
  isLoading: boolean;
  isFetching: boolean;
  error: any;
  addPage: (currentPage: number) => void;
  page: number;
  totalPages: number;
  initialPage: number;
  intervalPage: (number: number) => void;
}

type QueryProviderProps = {
  children: ReactNode;
};
const QueryContext = createContext<I_context_data>({} as I_context_data);

export function QueryProvider({ children }: QueryProviderProps) {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [initialPage, setInitialPage] = useState<number>(1);
  function addPage(currentPage: number) {
    setPage(currentPage);
  }

  function intervalPage(number: number) {
    setInitialPage(number);
  }

  const { data, isLoading, isFetching, error } = useQuery(
    ["users", page],
    async () => {
      const pre_request = await client.get("myapi");
      setTotalPages(pre_request.data.length / 4);
      const response = await client.get(`myapi?_page=${page}&_limit=4`);
      return response.data;
    },
    {
      staleTime: 1000 * 35,
    }
  );
  return (
    <QueryContext.Provider
      value={{
        data,
        isFetching,
        isLoading,
        error,
        addPage,
        page,
        totalPages,
        initialPage,
        intervalPage,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
}

export function useQueryHook() {
  const context = useContext(QueryContext);
  return context;
}
