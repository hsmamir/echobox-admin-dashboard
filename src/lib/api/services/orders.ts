import apiClient from '../config';
import {
  Order,
  OrderStatus,
  OrderStatusUpdate,
  OrderFilters,
  PaginationParams,
} from '../types';

/**
 * Admin Orders API Service
 * Endpoints for managing orders
 */
export const ordersApi = {
  /**
   * Get all orders with filters
   */
  getAll: async (params?: PaginationParams & OrderFilters): Promise<Order[]> => {
    const response = await apiClient.get('/api/v1/admin/orders', { params });
    return response.data;
  },

  /**
   * Get order by ID
   */
  getById: async (orderId: number): Promise<Order> => {
    const response = await apiClient.get(`/api/v1/admin/orders/${orderId}`);
    return response.data;
  },

  /**
   * Update order status
   */
  updateStatus: async (orderId: number, data: OrderStatusUpdate): Promise<Order> => {
    const response = await apiClient.patch(
      `/api/v1/admin/orders/${orderId}/status`,
      data
    );
    return response.data;
  },

  /**
   * Add tracking code to order
   */
  addTracking: async (orderId: number, trackingCode: string): Promise<Order> => {
    const response = await apiClient.post(`/api/v1/admin/orders/${orderId}/tracking`, {
      tracking_code: trackingCode,
    });
    return response.data;
  },

  /**
   * Get order statistics for dashboard
   */
  getStats: async () => {
    const response = await apiClient.get('/api/v1/admin/orders/stats/dashboard');
    return response.data;
  },
};
