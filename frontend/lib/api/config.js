const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'

export async function apiFetch(endpoint, options = {}) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  })

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`)
  }

  return res.json()
}
