'use client';

import ProductForm from './ProductForm';

export default function AdminProductPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-8 md:px-12 lg:px-24">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Cadastrar <span className="text-purple-500">Produto</span>
      </h1>
      <ProductForm />
    </main>
  );
}