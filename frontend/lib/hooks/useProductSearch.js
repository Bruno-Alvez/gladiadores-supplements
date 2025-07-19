'use client'

import { useEffect, useState } from 'react'
import { api } from '../api/config'

export default function useProductSearch(query) {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([])
      return
    }

    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${api}products/`)
        const data = await res.json()

        const lowerQuery = query.toLowerCase()
        const filtered = data.filter((product) =>
          product.name.toLowerCase().includes(lowerQuery)
        )
        setResults(filtered)
      } catch (err) {
        console.error('Erro na busca:', err)
        setResults([])
      } finally {
        setLoading(false)
      }
    }

    const timeout = setTimeout(fetchData, 300) // debounce simples
    return () => clearTimeout(timeout)
  }, [query])

  return { results, loading }
}