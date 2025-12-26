// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // BU SATIR ÖNEMLİ

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* APP'İ BUNUN İÇİNE ALMALISIN */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);