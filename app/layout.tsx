"use client"; 

import './globals.css';
import { AuthProvider } from '../context/AuthContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <header className="bg-blue-500 text-white py-4">
            <div className="container mx-auto px-4">
              <h1 className="text-xl font-bold">App de Receitas</h1>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          {/* <footer className="bg-gray-200 text-gray-600 py-4">
            <div className="container mx-auto px-4">
              <p className="text-center">Footer</p>
            </div>
          </footer> */}
        </AuthProvider>
      </body>
    </html>
  );
}
