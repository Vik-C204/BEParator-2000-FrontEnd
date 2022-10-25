import '../styles/globals.css'
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import "@fontsource/silkscreen/"
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import "@fontsource/nova-square"


const theme = extendTheme({
  fonts: {
    heading: `Nova Square, sans-serif`,
    body: `'Nova Square', sans-serif`,
  },
  colors: {
    primary: {
      main: "#333",
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#64b5f6",
      500: "#F6F6DB", // Only transition between 500 and 600 matters
      600: "#ECEBC9",
      700: "#8A7046",
    }
  }
});


function MyApp({ Component, pageProps }) {
  return <MoralisProvider initializeOnMount={false}>
    <ChakraProvider theme={theme}>
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
    </ChakraProvider>
  </MoralisProvider>
}

export default MyApp
