// Some bundled dependencies still expect a Node-style `global`. Alias it to
// `window` so they load in the browser.
declare global {
  interface Window {
    global: typeof globalThis;
  }
}

if (typeof window.global === "undefined") {
  window.global = window;
}

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
