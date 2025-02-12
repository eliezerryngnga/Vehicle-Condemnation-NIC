import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from './components/ui/provider'
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import "@fontsource/david-libre"

import "material-icons/iconfont/material-icons.css";
// import { pdfjs } from "react-pdf";


// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

// const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
      <BrowserRouter>
      <Provider>
          <App />
        </Provider>
      </BrowserRouter>
    {/* </QueryClientProvider> */}
  </StrictMode>,
)
