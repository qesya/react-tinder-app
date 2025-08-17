const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
const USER_ID = 'current-user'; // only for demostration

export interface ApiRequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

export const apiRequest = async (endpoint: string, options: ApiRequestOptions = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      'x-user-id': USER_ID,
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(url, config);
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};