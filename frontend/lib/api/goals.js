import { apiFetch } from './config'

export async function getProductsByGoal(slug) {
  try {
    const response = await apiFetch(`/goals/${slug}/products/`)
    return response
  } catch (error) {
    console.error('Erro ao buscar produtos por objetivo:', error)
    throw new Error('Erro ao buscar dados da API')
  }
}
