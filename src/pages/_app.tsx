import { AppProps } from "next/app";
import { SideBarProvider } from "../components/context/SideBarContext";
import { theme } from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryProvider } from "../services/hooks/useUsers";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryProvider>
        <ChakraProvider theme={theme}>
          <SideBarProvider>
            <Component {...pageProps} />
          </SideBarProvider>
        </ChakraProvider>
        <ReactQueryDevtools />
      </QueryProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
