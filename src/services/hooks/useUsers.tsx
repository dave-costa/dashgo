import { client } from "../axios";
import { createContext, useContext, ReactNode } from "react";
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
}

type QueryProviderProps = {
  children: ReactNode;
};
const QueryContext = createContext<I_context_data>({} as I_context_data);

export function QueryProvider({ children }: QueryProviderProps) {
  const { data, isLoading, isFetching, error } = useQuery(
    "users",
    async () => {
      const response = await client.get("myapi?_page=50&_limit=4");
      return response.data;
    },
    {
      staleTime: 1000 * 5,
    }
  );
  return (
    <QueryContext.Provider value={{ data, isFetching, isLoading, error }}>
      {children}
    </QueryContext.Provider>
  );
}

export function useQueryHook() {
  const context = useContext(QueryContext);
  return context;
}
