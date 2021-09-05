import { AppProps } from "next/app"
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "../styles/theme"
import { SideBarProvider } from "../components/context/SideBarContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme= {theme}>
      <SideBarProvider>
        <Component {...pageProps} />
      </SideBarProvider>
      
    </ChakraProvider>
  ) 
}

export default MyApp
