"use client"; 

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Bem vindo ao Portal de Receitas</h1>
      {isAuthenticated && (
        <Link href="/recipes" className="text-lg text-blue-500 hover:underline">
          Ver Receitas
        </Link>
      )}
    </div>
  );
}
