import { apiFetch } from './index'

// Returns only the products with success === true
export async function getBestSellers() {
  try {
    const products = await apiFetch('products/')
    if (!Array.isArray(products)) {
      throw new Error('Resposta inválida da API.')
    }
    return products.filter(p => p.success === true)
  } catch (error) {
    console.error('Erro em getBestSellers:', error)
    return []
  }
}

// Filtra produtos by slug of category
export async function getProductsByCategory(slug) {
  try {
    const all = await apiFetch('products')
    return all.filter(p => p.category?.slug === slug)
  } catch (error) {
    console.error('Erro em getProductsByCategory:', error)
    return []
  }
}

// Filter products by goal
export async function getProductsByGoal(goalSlug) {
  try {
    const all = await apiFetch('products')
    return all.filter(p =>
      p.goals?.some(goal => goal.slug === goalSlug)
    )
  } catch (error) {
    console.error('Erro em getProductsByGoal:', error)
    return []
  }
}


export async function getAllProducts() {
  return await apiFetch('products/')
}

export async function searchProducts(query, options = {}) {
  return apiFetch(`products/?search=${encodeURIComponent(query)}`, options)
}

