import { api } from './config'

export async function getProductsByCategorySlug(slug) {
  try {
    const response = await api.get(`/products/?category_slug=${slug}`)
    return response.data
  } catch (error) {
    console.error('Erro ao buscar produtos da categoria:', error)
    throw error
  }
}