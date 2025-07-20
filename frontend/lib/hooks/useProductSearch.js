import { useEffect, useState } from 'react'
import { searchProducts } from '../api/products'

export default function useProductSearch(query) {
  const [results, setResults] = useState([])
  const [controller, setController] = useState(null)

  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([])
      return
    }

    // Cancelar requisição anterior
    if (controller) {
      controller.abort()
    }

    const abortController = new AbortController()
    setController(abortController)

    const timer = setTimeout(async () => {
      try {
        const data = await searchProducts(query, { signal: abortController.signal })

        if (Array.isArray(data)) {
          setResults(data.slice(0, 8)) // Limita a 8 resultados
        } else {
          setResults([])
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Erro na busca de produtos:', error)
        }
      }
    }, 400) // Debounce de 400ms

    return () => {
      clearTimeout(timer)
      abortController.abort()
    }
  }, [query])

  return results
}