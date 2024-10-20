"use client";

import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../store';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Provider store={store}>
            {children}
          </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}