import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './assets/css/global';
import store from './store/store';
import { Provider as ReduxProvider } from 'react-redux'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const paypalOptions = {
  'client-id': 'AXb-GrX4wHOB95SLkrzYlWxMpFpsfe4S9o9humNSC5x8N1V0Ly-Pr4cSY6YcDGiChyOEia_4zvqhZ-Bq',
  currency: 'BRL'
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PayPalScriptProvider options={paypalOptions}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
          <ToastContainer />
        </BrowserRouter>
      </PayPalScriptProvider>
    </ReduxProvider>
  </React.StrictMode>
);
