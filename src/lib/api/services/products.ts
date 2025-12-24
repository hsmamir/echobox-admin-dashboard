import apiClient from '../config';
import {
  Product,
  ProductCreateRequest,
  ProductUpdateRequest,
  ProductVariant,
  ProductFilters,
  PaginationParams,
} from '../types';

/**
 * Admin Products API Service
 * Endpoints for managing products and variants
 */
export const productsApi = {
  /**
   * Get all products with filters
   */
  getAll: async (params?: PaginationParams & ProductFilters): Promise<Product[]> => {
    const response = await apiClient.get('/api/v1/admin/products', { params });
    return response.data;
  },

  /**
   * Get product by ID
   */
  getById: async (productId: number): Promise<Product> => {
    const response = await apiClient.get(`/api/v1/admin/products/${productId}`);
    return response.data;
  },

  /**
   * Create new product
   */
  create: async (data: ProductCreateRequest): Promise<Product> => {
    const response = await apiClient.post('/api/v1/admin/products', data);
    return response.data;
  },

  /**
   * Update product
   */
  update: async (productId: number, data: ProductUpdateRequest): Promise<Product> => {
    const response = await apiClient.patch(`/api/v1/admin/products/${productId}`, data);
    return response.data;
  },

  /**
   * Delete product
   */
  delete: async (productId: number, hardDelete: boolean = false): Promise<void> => {
    await apiClient.delete(`/api/v1/admin/products/${productId}`, {
      params: { hard_delete: hardDelete },
    });
  },

  /**
   * Bulk activate products
   */
  bulkActivate: async (productIds: number[]): Promise<void> => {
    await apiClient.post('/api/v1/admin/products/bulk-activate', productIds);
  },

  /**
   * Bulk deactivate products
   */
  bulkDeactivate: async (productIds: number[]): Promise<void> => {
    await apiClient.post('/api/v1/admin/products/bulk-deactivate', productIds);
  },

  /**
   * Bulk set featured status
   */
  bulkSetFeatured: async (productIds: number[], featured: boolean = true): Promise<void> => {
    await apiClient.post('/api/v1/admin/products/bulk-feature', productIds, {
      params: { featured },
    });
  },

  /**
   * Get product statistics
   */
  getStats: async () => {
    const response = await apiClient.get('/api/v1/admin/products/stats/summary');
    return response.data;
  },
};

/**
 * Product Variants API
 */
export const variantsApi = {
  /**
   * Create variant for product
   */
  create: async (productId: number, data: any): Promise<ProductVariant> => {
    const response = await apiClient.post(
      `/api/v1/admin/products/${productId}/variants`,
      data
    );
    return response.data;
  },

  /**
   * Update variant
   */
  update: async (variantId: number, data: any): Promise<ProductVariant> => {
    const response = await apiClient.patch(`/api/v1/admin/variants/${variantId}`, data);
    return response.data;
  },

  /**
   * Delete variant
   */
  delete: async (variantId: number): Promise<void> => {
    await apiClient.delete(`/api/v1/admin/variants/${variantId}`);
  },

  /**
   * Update variant inventory
   */
  updateInventory: async (variantId: number, data: {
    quantity: number;
    reserved?: number;
  }): Promise<void> => {
    await apiClient.patch(`/api/v1/admin/variants/${variantId}/inventory`, data);
  },
};
