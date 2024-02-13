import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ScreenSizeProvider } from './contexts/ScreenSize.jsx';
import { OverlayProvider } from './contexts/OverlayContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScreenSizeProvider>
      <OverlayProvider>
        <App />
      </OverlayProvider>
    </ScreenSizeProvider>
  </React.StrictMode>,
);
