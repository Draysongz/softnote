import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource-variable/inter';
import { extendTheme } from "@chakra-ui/react";


const breakpoints = {
  sm: "390px",  // Custom Small size (e.g., 480px)
  md: "768px",  // Custom Medium size (e.g., 768px)
  lg: "992px",  // Custom Large size (e.g., 992px)
  xl: "1280px",  // Custom Extra Large size (e.g., 1280px)
  "2xl": "1536px" // Custom Double Extra Large (e.g., 1536px)
};


const theme = extendTheme({
  fonts: {
    body: "InterVariable, sans-serif",
    heading: "InterVariable, sans-serif",
  },
  breakpoints
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
