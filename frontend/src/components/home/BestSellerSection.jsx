'use client'

import { useEffect, useState } from 'react'
import { getBestSellers } from '../../../lib/api/products'
import ProductModal from '../products/ProductModal'

export default function BestSellersSection() {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchBestSellers() {
      try {
        const data = await getBestSellers()
        setProducts(data)
      } catch (err) {
        console.error('Erro ao buscar produtos de sucesso:', err)
        setError('Erro ao carregar os produtos.')
      }
    }

    fetchBestSellers()
  }, [])

  return (
    <section id="sucessos" className="py-12 px-4 md:px-8 lg:px-20 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Sucessos de <span className="text-purple-500">Venda</span>
      </h2>

      {error && (
        <p className="text-red-500 text-center mb-6">{error}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-purple-900 rounded-2xl p-4 w-full max-w-xs hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <ul className="text-sm space-y-1 mb-4">
              {Array.isArray(product.benefits) && product.benefits.length > 0 ? (
                product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span>🏋️‍♂️</span> {benefit}
                  </li>
                ))
              ) : (
                <li className="text-zinc-300">Sem benefícios listados</li>
              )}
            </ul>
            <a
              href={`https://wa.me/5511999999999?text=${encodeURIComponent(product.whatsapp_message || product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-center font-medium transition"
            >
              Comprar no WhatsApp
            </a>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  )
}
