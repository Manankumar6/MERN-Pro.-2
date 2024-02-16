import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './store/auth';
import { ToastContainer } from 'react-toastify';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>

    <BrowserRouter>
      <App />
      <ToastContainer
        bodyClassName="toastBody"
      />
    </BrowserRouter>

  </AuthProvider>

);


