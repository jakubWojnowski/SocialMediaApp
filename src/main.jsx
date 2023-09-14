import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {DarkModeContextProvider} from "./context/DarkModeProvider.jsx";
import {AuthenticationContextProvider} from "./context/AuthenticationContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <DarkModeContextProvider>
          <AuthenticationContextProvider>
            <App />
        </AuthenticationContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
)
