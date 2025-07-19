const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function apiFetch(endpoint, options = {}) {
  const res = await fetch(`${API_BASE_URL}/api/${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
    next: { revalidate: 60 }, // cache leve
  })

  if (!res.ok) {
    const error = await res.json().catch(() => ({}))
    throw new Error(error.detail || 'Erro ao buscar dados da API')
  }

  return res.json()
}