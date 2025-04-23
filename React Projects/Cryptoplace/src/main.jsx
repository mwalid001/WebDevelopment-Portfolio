import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CoinContextProvider from './context/CoinContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* We can use the router in any component within this <App /> component */}
    <BrowserRouter>
      {/* To access all context data inside any Component in the App Component */}
      <CoinContextProvider>
        <App /> 
      </CoinContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
