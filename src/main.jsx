import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CarProvider } from  "./context/carContext";
import {UserProvider} from './context/userContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <CarProvider >
      <App/>
    </CarProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)