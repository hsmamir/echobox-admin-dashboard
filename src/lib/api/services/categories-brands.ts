import apiClient from '../config';
import {
  Category,
  CategoryCreateRequest,
  Brand,
  BrandCreateRequest,
} from '../types';

/**
 * Admin Categories API Service
 */
export const categoriesApi = {
  /**
   * Get all categories
   */
  getAll: async (params?: {
    parent_id?: number;
    is_active?: boolean;
  }): Promise<Category[]> => {
    const response = await apiClient.get('/api/v1/admin/categories', { params });
    return response.data;
  },

  /**
   * Get category by ID
   */
  getById: async (categoryId: number): Promise<Category> => {
    const response = await apiClient.get(`/api/v1/admin/categories/${categoryId}`);
    return response.data;
  },

  /**
   * Create new category
   */
  create: async (data: CategoryCreateRequest): Promise<Category> => {
    const response = await apiClient.post('/api/v1/admin/categories', data);
    return response.data;
  },

  /**
   * Update category
   */
  update: async (categoryId: number, data: Partial<CategoryCreateRequest>): Promise<Category> => {
    const response = await apiClient.patch(`/api/v1/admin/categories/${categoryId}`, data);
    return response.data;
  },

  /**
   * Delete category
   */
  delete: async (categoryId: number, force: boolean = false): Promise<void> => {
    await apiClient.delete(`/api/v1/admin/categories/${categoryId}`, {
      params: { force },
    });
  },

  /**
   * Reorder categories
   */
  reorder: async (orders: { id: number; sort_order: number }[]): Promise<void> => {
    await apiClient.post('/api/v1/admin/categories/reorder', orders);
  },

  /**
   * Get category statistics
   */
  getStats: async () => {
    const response = await apiClient.get('/api/v1/admin/categories/stats/summary');
    return response.data;
  },
};

/**
 * Admin Brands API Service
 */
export const brandsApi = {
  /**
   * Get all brands
   */
  getAll: async (params?: { is_active?: boolean }): Promise<Brand[]> => {
    const response = await apiClient.get('/api/v1/admin/brands', { params });
    return response.data;
  },

  /**
   * Get brand by ID
   */
  getById: async (brandId: number): Promise<Brand> => {
    const response = await apiClient.get(`/api/v1/admin/brands/${brandId}`);
    return response.data;
  },

  /**
   * Create new brand
   */
  create: async (data: BrandCreateRequest): Promise<Brand> => {
    const response = await apiClient.post('/api/v1/admin/brands', data);
    return response.data;
  },

  /**
   * Update brand
   */
  update: async (brandId: number, data: Partial<BrandCreateRequest>): Promise<Brand> => {
    const response = await apiClient.patch(`/api/v1/admin/brands/${brandId}`, data);
    return response.data;
  },

  /**
   * Delete brand
   */
  delete: async (brandId: number, force: boolean = false): Promise<void> => {
    await apiClient.delete(`/api/v1/admin/brands/${brandId}`, {
      params: { force },
    });
  },

  /**
   * Get brand statistics
   */
  getStats: async () => {
    const response = await apiClient.get('/api/v1/admin/brands/stats/summary');
    return response.data;
  },
};
