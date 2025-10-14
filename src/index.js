import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CVIProvider } from './components/cvi/components/cvi-provider';
import ErrorBoundary from './ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ErrorBoundary>
    <CVIProvider>
      <App />
    </CVIProvider>
  </ErrorBoundary>
);