'use client'

import { useEffect, useState } from 'react'
import { Dumbbell } from 'lucide-react'
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
      <h2 className="text-3xl md:text-3xl font-bold text-center mb-10">
        SUCESSO DE <span className="text-purple-500">VENDAS</span>
      </h2>

      {error && (
        <p className="text-red-500 text-center mb-6">{error}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {products.map((product) => {
          const image = product.image_main || product.image_urls?.[0] || '/placeholder.jpg'

          const benefitsArray = typeof product.benefits === 'string'
            ? product.benefits.split(',').map(b => b.trim())
            : Array.isArray(product.benefits)
              ? product.benefits
              : []

          return (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-gradient-to-br from-purple-950/50 via-purple-900/50 to-black rounded-2xl p-5 flex flex-col items-center text-center shadow-lg hover:shadow-purple-600/30 hover:scale-105 transition-transform duration-300 cursor-pointer w-full max-w-xs border border-purple-800/40"
            >
              <div className="relative w-full h-56 sm:h-64 mb-4">
                <img
                  src={image}
                  alt={product.name}
                  className="rounded-xl object-cover w-full h-full shadow-md border border-purple-900"
                />
              </div>

              <h3 className="text-white text-base font-extrabold bg-purple-900/20 px-3 py-1 rounded-md mb-3 backdrop-blur-sm">
                {product.name}
              </h3>

              <div className="w-full max-h-32 overflow-y-auto sm:overflow-visible custom-scroll px-1 mb-4">
                <ul className="text-sm text-zinc-300 space-y-2">
                  {benefitsArray.length > 0 ? (
                    benefitsArray.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-left">
                        <Dumbbell size={16} className="text-purple-500 shrink-0" />
                        <span className="break-words">{benefit}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-zinc-400">Sem benefícios listados</li>
                  )}
                </ul>
              </div>

              <a
                href={`https://wa.me/5511999999999?text=${encodeURIComponent(product.whatsapp_message || product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition w-full"
                onClick={(e) => e.stopPropagation()}
              >
                Comprar via WhatsApp
              </a>
            </div>
          )
        })}
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  )
}
