'use client';

import { useState, useEffect } from 'react';
import { getAuthHeaders, isAuthenticated } from '../../../../lib/auth';

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

  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState(null);
  const [brands, setBrands] = useState(null);
  const [goals, setGoals] = useState(null);
  const [error, setError] = useState('');

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://gladiadores-supplements.onrender.com/api';

  useEffect(() => {
    if (!isAuthenticated()) return;
    async function fetchData() {
      try {
        const [catRes, brandRes, goalRes] = await Promise.all([
          fetch(`${API_URL}/categories/`),
          fetch(`${API_URL}/brands/`),
          fetch(`${API_URL}/goals/`),
        ]);

        const [cats, brandsData, goalsData] = await Promise.all([
          catRes.json(),
          brandRes.json(),
          goalRes.json(),
        ]);

        setCategories(cats);
        setBrands(brandsData);
        setGoals(goalsData);
      } catch (err) {
        console.error('❌ API fetch error:', err);
        setError('Erro ao carregar dados do formulário.');
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
      const selected = Array.from(files).slice(0, 10);
      setFormData((prev) => ({ ...prev, images: selected }));
      const previews = selected.map((file) => URL.createObjectURL(file));
      setImagePreviews(previews);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'images') {
        value.forEach((file, i) => data.append(`image_${i + 1}`, file));
      } else if (key === 'goals') {
        value.forEach((v) => data.append('goals', v));
      } else if (key === 'benefits') {
        data.append('benefits', value || '');
      } else {
        data.append(key, value);
      }
    });

    try {
      const res = await fetch(`${API_URL}/products/`, {
        method: 'POST',
        headers: { ...getAuthHeaders() },
        body: data,
      });

      if (!res.ok) throw new Error();

      alert('✅ Produto cadastrado com sucesso!');
      setFormData({ name: '', slug: '', description: '', whatsapp_message: '', price: '', success: false, benefits: '', category: '', brand: '', goals: [], images: [] });
      setImagePreviews([]);
    } catch (err) {
      setError('Erro ao salvar produto. Verifique os campos.');
    } finally {
      setLoading(false);
    }
  };

  const handleImageDelete = (index) => {
    setFormData((prev) => {
      const newImages = [...prev.images];
      newImages.splice(index, 1);
      return { ...prev, images: newImages };
    });
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  if (!isAuthenticated()) return <p className="text-center text-white">Você precisa estar logado.</p>;
  if (!categories || !brands || !goals) return <p className="text-center text-white">🔄 Carregando formulário...</p>;

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-900 p-6 rounded-2xl shadow-xl">
      {error && <p className="text-red-500 md:col-span-2">{error}</p>}

      <input name="name" placeholder="Ex: Whey Integralmedica" value={formData.name} onChange={handleChange} required className="input" />
      <input name="slug" placeholder="Ex: whey-integralmedica" value={formData.slug} onChange={handleChange} required className="input" />
      <textarea name="description" placeholder="Ex: Proteína de rápida absorção, ideal para recuperação muscular." value={formData.description} onChange={handleChange} required className="input md:col-span-2" />
      <input name="whatsapp_message" placeholder="Ex: Olá, vim pelo site e quero mais informações sobre o produto: Whey." value={formData.whatsapp_message} onChange={handleChange} required className="input" />
      <input name="price" type="number" placeholder="Ex: 89.90" value={formData.price} onChange={handleChange} required className="input" />
      <input name="benefits" placeholder="Ex: RápidaAbsorção,SaúdeMuscular,Recuperação,Força" value={formData.benefits} onChange={handleChange} className="input" />

      <select name="category" value={formData.category} onChange={handleChange} required className="input">
        <option value="">Selecione a Categoria</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>

      <select name="brand" value={formData.brand} onChange={handleChange} required className="input">
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
              <input type="checkbox" name="goals" value={g.id} checked={formData.goals.includes(String(g.id))} onChange={handleChange} className="accent-purple-600" />
              <span className="text-white text-sm">{g.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="md:col-span-2">
        <label className="block text-white font-semibold mb-2">Imagens (máx. 10)</label>
        <input name="images" type="file" multiple accept="image/*" onChange={handleChange} className="input cursor-pointer" />
        <div className="grid grid-cols-5 gap-2 mt-2">
          {imagePreviews.map((url, index) => (
            <div key={index} className="relative">
              <img src={url} alt={`Imagem ${index + 1}`} className="w-full h-20 object-cover rounded" />
              <span className="absolute top-0 left-0 bg-purple-700 text-white text-xs px-1 rounded-br">{index + 1}</span>
              <button type="button" onClick={() => handleImageDelete(index)} className="absolute top-0 right-0 text-white bg-red-600 px-1 text-xs rounded-bl">X</button>
            </div>
          ))}
        </div>
      </div>

      <label className="flex items-center space-x-2 md:col-span-2">
        <input type="checkbox" name="success" checked={formData.success} onChange={handleChange} />
        <span className="text-sm text-white">Produto é sucesso de vendas</span>
      </label>

      <button type="submit" disabled={loading} className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg text-white font-semibold cursor-pointer md:col-span-2">
        {loading ? 'Salvando...' : 'Salvar Produto'}
      </button>
    </form>
  );
}