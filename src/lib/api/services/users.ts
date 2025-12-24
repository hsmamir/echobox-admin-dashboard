import apiClient from '../config';
import {
  User,
  UserDetail,
  UserCreateRequest,
  UserUpdateRequest,
  PaginationParams,
} from '../types';

/**
 * Admin Users API Service
 * Endpoints for managing users
 */
export const usersApi = {
  /**
   * Get all users with filters
   */
  getAll: async (params?: PaginationParams & {
    search?: string;
    is_admin?: boolean;
    verified_only?: boolean;
  }): Promise<User[]> => {
    const response = await apiClient.get('/api/v1/admin/users', { params });
    return response.data;
  },

  /**
   * Get user by ID
   */
  getById: async (userId: number): Promise<UserDetail> => {
    const response = await apiClient.get(`/api/v1/admin/users/${userId}`);
    return response.data;
  },

  /**
   * Create new user
   */
  create: async (data: UserCreateRequest): Promise<User> => {
    const response = await apiClient.post('/api/v1/admin/users', data);
    return response.data;
  },

  /**
   * Update user
   */
  update: async (userId: number, data: UserUpdateRequest): Promise<User> => {
    const response = await apiClient.patch(`/api/v1/admin/users/${userId}`, data);
    return response.data;
  },

  /**
   * Delete user
   */
  delete: async (userId: number): Promise<void> => {
    await apiClient.delete(`/api/v1/admin/users/${userId}`);
  },

  /**
   * Update user password
   */
  updatePassword: async (userId: number, newPassword: string): Promise<void> => {
    await apiClient.patch(`/api/v1/admin/users/${userId}/password`, {
      new_password: newPassword,
    });
  },

  /**
   * Get user statistics
   */
  getStats: async () => {
    const response = await apiClient.get('/api/v1/admin/users/stats/summary');
    return response.data;
  },
};
