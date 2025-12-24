import apiClient, { setAuthToken, setUserData, clearAuthToken } from '../config';

interface LoginRequest {
  username: string; // phone number
  password: string;
}

interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

interface UserResponse {
  id: number;
  phone: string;
  email: string | null;
  full_name: string | null;
  phone_verified: boolean;
  is_admin: boolean;
}

/**
 * Authentication API Service
 */
export const authApi = {
  /**
   * Login with phone and password
   */
  login: async (phone: string, password: string): Promise<LoginResponse> => {
    const formData = new URLSearchParams();
    formData.append('username', phone);
    formData.append('password', password);

    const response = await apiClient.post('/api/v1/auth/login', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const data = response.data;
    
    // Save token
    setAuthToken(data.access_token);
    
    // Fetch and save user data
    const userData = await authApi.getMe();
    setUserData(userData);

    return data;
  },

  /**
   * Get current user info
   */
  getMe: async (): Promise<UserResponse> => {
    const response = await apiClient.get('/api/v1/auth/me');
    return response.data;
  },

  /**
   * Logout
   */
  logout: () => {
    clearAuthToken();
    if (typeof window !== 'undefined') {
      window.location.href = '/auth/signin';
    }
  },

  /**
   * Check if user is authenticated and is admin
   */
  isAuthenticated: (): boolean => {
    if (typeof window === 'undefined') return false;
    const token = localStorage.getItem('auth_token');
    const userData = localStorage.getItem('user_data');
    
    if (!token || !userData) return false;
    
    try {
      const user = JSON.parse(userData);
      return user.is_admin === true;
    } catch {
      return false;
    }
  },
};
