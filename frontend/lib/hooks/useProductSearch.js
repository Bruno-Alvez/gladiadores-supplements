import products from '@/data/categories/proteinas'

export default function useProductSearch(query) {
  if (!query) return []

  const lowerQuery = query.toLowerCase()
  const allItems = Object.values(products).flat()

  return allItems.filter((product) =>
    product.name.toLowerCase().includes(lowerQuery)
  )
}