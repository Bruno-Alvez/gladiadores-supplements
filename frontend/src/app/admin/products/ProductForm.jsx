"use client";

import { useState, useEffect } from "react";
import axios from "axios";

// Optional: use environment variable in prod
const API_BASE_URL = "https://gladiadores-supplements.onrender.com/api";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    category: "",
    brand: "",
    goals: [],
    benefits: [],
    image: null,
    success: false,
  });

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // --- Fetch dropdown data ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, brandRes, goalRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/categories/`),
          axios.get(`${API_BASE_URL}/brands/`),
          axios.get(`${API_BASE_URL}/goals/`),
        ]);
        setCategories(catRes.data);
        setBrands(brandRes.data);
        setGoals(goalRes.data);
      } catch (error) {
        console.error("Error loading form options:", error);
        setFeedback("Erro ao carregar opções do formulário.");
      }
    };
    fetchData();
  }, []);

  // --- Handle input ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // --- Handle file ---
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  // --- Handle multi-goals ---
  const handleGoalsChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setFormData((prev) => ({
      ...prev,
      goals: selected,
    }));
  };

  // --- Submit form ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "goals") {
        value.forEach((goalId) => payload.append("goals", goalId));
      } else if (key === "benefits") {
        payload.append("benefits", JSON.stringify(value));
      } else {
        payload.append(key, value);
      }
    });

    try {
      await axios.post(`${API_BASE_URL}/products/`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFeedback("Produto criado com sucesso!");
      setFormData({
        name: "",
        slug: "",
        description: "",
        category: "",
        brand: "",
        goals: [],
        benefits: [],
        image: null,
        success: false,
      });
    } catch (error) {
      console.error(error);
      setFeedback("Erro ao criar o produto.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-purple-700">Cadastro de Produto</h2>

      <input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input type="text" name="slug" placeholder="Slug" value={formData.slug} onChange={handleChange} className="w-full p-2 border rounded" required />
      <textarea name="description" placeholder="Descrição" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" required />

      <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded" required>
        <option value="">Selecione a Categoria</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>

      <select name="brand" value={formData.brand} onChange={handleChange} className="w-full p-2 border rounded" required>
        <option value="">Selecione a Marca</option>
        {brands.map((b) => (
          <option key={b.id} value={b.id}>{b.name}</option>
        ))}
      </select>

      <select name="goals" multiple value={formData.goals} onChange={handleGoalsChange} className="w-full p-2 border rounded">
        {goals.map((g) => (
          <option key={g.id} value={g.id}>{g.name}</option>
        ))}
      </select>

      <input type="file" name="image" onChange={handleFileChange} className="w-full" required />

      <label className="flex items-center space-x-2">
        <input type="checkbox" name="success" checked={formData.success} onChange={(e) => setFormData({ ...formData, success: e.target.checked })} />
        <span>Produto é sucesso de vendas</span>
      </label>

      <button type="submit" className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800 transition" disabled={loading}>
        {loading ? "Salvando..." : "Salvar Produto"}
      </button>

      {feedback && <p className="text-center text-sm text-red-500 mt-2">{feedback}</p>}
    </form>
  );
};

export default ProductForm;