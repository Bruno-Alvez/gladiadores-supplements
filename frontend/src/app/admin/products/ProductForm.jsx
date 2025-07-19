'use client';

import { useState, useEffect } from 'react';

export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    whatsapp_message: '',
    price: '',
    success: false,
    benefits: '',
    category: '',
    brand: '',
    goals: [],
    images: [],
  });

  const [categories, setCategories] = useState(null);
  const [brands, setBrands] = useState(null);
  const [goals, setGoals] = useState(null);
  const [error, setError] = useState('');

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://gladiadores-supplements.onrender.com/api';

  useEffect(() => {
    async function fetchData() {
      try {
        const [catRes, brandRes, goalRes] = await Promise.all([
          fetch(`${API_URL}/categories/`),
          fetch(`${API_URL}/brands/`),
          fetch(`${API_URL}/goals/`),
        ]);

        if (!catRes.ok || !brandRes.ok || !goalRes.ok) {
          throw new Error('Failed to fetch one or more endpoints.');
        }

        const cats = await catRes.json();
        const brandsData = await brandRes.json();
        const goalsData = await goalRes.json();

        setCategories(cats);
        setBrands(brandsData);
        setGoals(goalsData);
      } catch (err) {
        console.error('❌ Erro ao buscar dados da API:', err);
        setError('Erro ao carregar opções do formulário.');
      }
    }

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox' && name !== 'success') {
      const goalId = value;
      setFormData((prev) => {
        const isSelected = prev.goals.includes(goalId);
        const updatedGoals = isSelected
          ? prev.goals.filter((id) => id !== goalId)
          : [...prev.goals, goalId];
        return { ...prev, goals: updatedGoals };
      });
    } else if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === 'file' && name === 'images') {
      const selectedFiles = Array.from(files).slice(0, 10);
      setFormData((prev) => ({ ...prev, images: selectedFiles }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.goals.length === 0) {
      setError('Selecione pelo menos um objetivo para o produto.');
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('slug', formData.slug);
    data.append('description', formData.description);
    data.append('whatsapp_message', formData.whatsapp_message);
    data.append('price', formData.price);
    data.append('success', formData.success);
    data.append('benefits', formData.benefits
      ? JSON.stringify(formData.benefits)
      : JSON.stringify([]));
    data.append('category', formData.category);
    data.append('brand', formData.brand);
    formData.goals.forEach((goalId) => data.append('goals', goalId));

    if (formData.images && formData.images.length > 0) {
      formData.images.forEach((img, index) => {
        data.append(`image_${index + 1}`, img);
      });
    }

    try {
      const res = await fetch(`${API_URL}/products/`, {
        method: 'POST',
        body: data,
      });

      if (!res.ok) {
        const err = await res.json();
        console.error(err);
        setError('Erro ao salvar produto. Verifique os campos.');
        return;
      }

      alert('Produto cadastrado com sucesso!');
    } catch (err) {
      console.error(err);
      setError('Erro ao conectar com o servidor.');
    }
  };

  if (!categories || !brands || !goals) {
    return <p className="text-center text-white">🔄 Carregando formulário...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-900 p-6 rounded-2xl shadow-xl">
      {error && <p className="text-red-500 md:col-span-2">{error}</p>}

      <input type="text" name="name" placeholder="Nome" required value={formData.name} onChange={handleChange} className="input" />
      <input type="text" name="slug" placeholder="Slug" required value={formData.slug} onChange={handleChange} className="input" />
      <textarea name="description" placeholder="Descrição" required value={formData.description} onChange={handleChange} className="input md:col-span-2" />
      <input type="text" name="whatsapp_message" placeholder="Mensagem WhatsApp" required value={formData.whatsapp_message} onChange={handleChange} className="input" />
      <input type="number" name="price" placeholder="Preço" required value={formData.price} onChange={handleChange} className="input" />
      <input type="text" name="benefits" placeholder="Benefícios (opcional)" value={formData.benefits} onChange={handleChange} className="input" />

      <select name="category" required value={formData.category} onChange={handleChange} className="input">
        <option value="">Selecione a Categoria</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>

      <select name="brand" required value={formData.brand} onChange={handleChange} className="input">
        <option value="">Selecione a Marca</option>
        {brands.map((b) => (
          <option key={b.id} value={b.id}>{b.name}</option>
        ))}
      </select>

      <div className="md:col-span-2">
        <p className="text-white mb-2 font-semibold">Objetivos</p>
        <div className="grid grid-cols-2 gap-2">
          {goals.map((g) => (
            <label key={g.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="goals"
                value={g.id}
                checked={formData.goals.includes(String(g.id))}
                onChange={handleChange}
                className="accent-purple-600"
              />
              <span className="text-white text-sm">{g.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="md:col-span-2">
        <label className="block text-white font-semibold mb-2">Imagens do Produto (até 10)</label>
        <input
          type="file"
          name="images"
          accept="image/*"
          multiple
          onChange={handleChange}
          className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-purple-600 file:text-white
            hover:file:bg-purple-700
            cursor-pointer bg-zinc-800 rounded-lg p-2"
        />
      </div>

      <label className="flex items-center space-x-2 md:col-span-2">
        <input type="checkbox" name="success" checked={formData.success} onChange={handleChange} />
        <span className="text-sm text-white">Produto é sucesso de vendas</span>
      </label>

      <button type="submit" className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg text-white font-semibold md:col-span-2">
        Salvar Produto
      </button>
    </form>
  );
}
