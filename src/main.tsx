import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource-variable/inter';
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "InterVariable, sans-serif",
    heading: "InterVariable, sans-serif",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
