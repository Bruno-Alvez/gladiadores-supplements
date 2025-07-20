'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Dumbbell } from 'lucide-react'
import { getAllProducts } from '../../../../lib/api/products'
import ProductModal from '@/components/products/ProductModal'

export default function CategoryPage() {
  const { slug } = useParams()
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchProducts() {
      try {
        const all = await getAllProducts()

        const filtered = all.filter((product) =>
          product.category?.slug === slug
        )

        setProducts(filtered)
      } catch (err) {
        console.error('Erro ao buscar produtos por categoria:', err)
        setError('Erro ao carregar os produtos da categoria.')
      }
    }

    fetchProducts()
  }, [slug])

  return (
    <section className="py-12 px-4 md:px-8 lg:px-20 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 capitalize">
        Categoria: <span className="text-purple-500">{slug.replace('-', ' ')}</span>
      </h2>

      {error && <p className="text-red-500 text-center mb-6">{error}</p>}

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
              className="bg-purple-950/40 backdrop-blur rounded-2xl p-4 flex flex-col items-center text-center shadow-md hover:shadow-purple-500/20 transition cursor-pointer w-full max-w-xs"
            >
              <img
                src={image}
                alt={product.name}
                className="rounded-lg object-contain w-full h-56 sm:h-64 mb-4"
              />
              <h3 className="text-white text-lg font-bold mb-2">{product.name}</h3>

              {/* Scroll nos benefícios no desktop */}
              <div className="w-full max-h-32 overflow-y-auto sm:overflow-visible custom-scroll px-2">
                <ul className="text-sm text-zinc-300 mb-4 space-y-1">
                  {benefitsArray.length > 0 ? (
                    benefitsArray.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-left">
                        <Dumbbell size={16} className="text-purple-500" />
                        {benefit}
                      </li>
                    ))
                  ) : (
                    <li className="text-zinc-400">Sem benefícios listados</li>
                  )}
                </ul>
              </div>

              <a
                href={`https://wa.me/5512981146131?text=${encodeURIComponent(product.whatsapp_message || product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition w-full"
                onClick={(e) => e.stopPropagation()}
              >
                Comprar via WhatsApp
              </a>
            </div>
          )
        })}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  )
}
