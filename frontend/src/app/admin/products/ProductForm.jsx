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
    image: null,
  });

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [goals, setGoals] = useState([]);
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

        console.log('✔ Categorias:', cats);
        console.log('✔ Marcas:', brandsData);
        console.log('✔ Objetivos:', goalsData);
      } catch (err) {
        console.error('❌ Erro ao buscar dados da API:', err);
        setError('Erro ao carregar opções do formulário.');
      }
    }

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append('name', formData.name);
    data.append('slug', formData.slug);
    data.append('description', formData.description);
    data.append('whatsapp_message', formData.whatsapp_message);
    data.append('price', formData.price);
    data.append('success', formData.success);
    data.append('benefits', formData.benefits);
    data.append('category', formData.category);
    data.append('brand', formData.brand);
    formData.goals.forEach((goalId) => data.append('goals', goalId));
    if (formData.image) data.append('image', formData.image);

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

      <select name="goals" multiple value={formData.goals} onChange={(e) => {
        const selected = Array.from(e.target.selectedOptions, (opt) => opt.value);
        setFormData((prev) => ({ ...prev, goals: selected }));
      }} className="input md:col-span-2 h-32">
        {goals.map((g) => (
          <option key={g.id} value={g.id}>{g.name}</option>
        ))}
      </select>

      <input type="file" name="image" accept="image/*" onChange={handleChange} className="input" />

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