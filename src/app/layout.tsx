"use client";

import '../styles/globals.css';
import { Provider } from 'react-redux'; // Redux provider
import { store } from '../store';
import { SessionProvider } from 'next-auth/react'; // NextAuth session provider
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Provider store={store}>
            {children} {/* This will render the page components */}
          </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}