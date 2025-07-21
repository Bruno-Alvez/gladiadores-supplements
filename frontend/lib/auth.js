export const isAuthenticated = () => {
  if (typeof window === 'undefined') return false;
  const token = localStorage.getItem('access');
  return Boolean(token);
};

export const getAuthHeaders = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('access') : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
};
