import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CocktailsProvider } from './context/CocktailsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CocktailsProvider>
      <App />
    </CocktailsProvider>
  </React.StrictMode>
);
