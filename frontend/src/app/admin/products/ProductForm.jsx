'use client';

import { useState } from 'react';

export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    benefits: '',
    price: '',
    image: null,
    category: '',
    brand: '',
    goals: [],
    success: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (type === 'file') {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted product:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-900 p-6 rounded-2xl shadow-xl">
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-semibold">Nome</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-zinc-800 p-3 rounded-lg text-white border border-zinc-700 focus:outline-none focus:border-purple-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-semibold">Descrição</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="bg-zinc-800 p-3 rounded-lg text-white border border-zinc-700 focus:outline-none focus:border-purple-500"
          rows={4}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-semibold">Benefícios</label>
        <textarea
          name="benefits"
          value={formData.benefits}
          onChange={handleChange}
          className="bg-zinc-800 p-3 rounded-lg text-white border border-zinc-700 focus:outline-none focus:border-purple-500"
          rows={4}
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-semibold">Preço (R$)</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="bg-zinc-800 p-3 rounded-lg text-white border border-zinc-700 focus:outline-none focus:border-purple-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-semibold">Categoria</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="bg-zinc-800 p-3 rounded-lg text-white border border-zinc-700 focus:outline-none focus:border-purple-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-semibold">Marca</label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          className="bg-zinc-800 p-3 rounded-lg text-white border border-zinc-700 focus:outline-none focus:border-purple-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-semibold">Objetivos (separados por vírgula)</label>
        <input
          type="text"
          name="goals"
          value={formData.goals}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              goals: e.target.value.split(',').map((g) => g.trim()),
            }))
          }
          className="bg-zinc-800 p-3 rounded-lg text-white border border-zinc-700 focus:outline-none focus:border-purple-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-semibold">Imagem</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="text-white"
        />
      </div>

      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="success"
          checked={formData.success}
          onChange={handleChange}
          className="w-5 h-5"
        />
        <label className="text-sm font-semibold">Produto de sucesso?</label>
      </div>

      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded-lg text-white font-semibold"
        >
          Cadastrar Produto
        </button>
      </div>
    </form>
  );
}