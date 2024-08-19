import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import reactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { queryClient } from './config';
import LoginContainer from './components/LoginContainer';

// biome-ignore lint/style/noNonNullAssertion: We expect this element to always exist
reactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <QueryClientProvider client={queryClient}>
        <LoginContainer />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
