import apiClient from '../config';
import {
  Slider,
  SliderCreateRequest,
  Media,
  Payment,
  DeliverySlot,
  DeliverySlotCreateRequest,
  Box,
  BoxCreateRequest,
  Coupon,
  CouponCreateRequest,
  PaginationParams,
} from '../types';

/**
 * Admin Sliders API Service
 */
export const slidersApi = {
  getAll: async (params?: { is_active?: boolean }): Promise<Slider[]> => {
    const response = await apiClient.get('/api/v1/admin/sliders', { params });
    return response.data;
  },

  getById: async (sliderId: number): Promise<Slider> => {
    const response = await apiClient.get(`/api/v1/admin/sliders/${sliderId}`);
    return response.data;
  },

  create: async (data: SliderCreateRequest): Promise<Slider> => {
    const response = await apiClient.post('/api/v1/admin/sliders', data);
    return response.data;
  },

  update: async (sliderId: number, data: Partial<SliderCreateRequest>): Promise<Slider> => {
    const response = await apiClient.patch(`/api/v1/admin/sliders/${sliderId}`, data);
    return response.data;
  },

  delete: async (sliderId: number): Promise<void> => {
    await apiClient.delete(`/api/v1/admin/sliders/${sliderId}`);
  },

  reorder: async (orders: { id: number; sort_order: number }[]): Promise<void> => {
    await apiClient.post('/api/v1/admin/sliders/reorder', orders);
  },
};

/**
 * Admin Media API Service
 */
export const mediaApi = {
  getAll: async (params?: PaginationParams & {
    file_type?: string;
    processing_status?: string;
    user_id?: number;
  }): Promise<Media[]> => {
    const response = await apiClient.get('/api/v1/admin/media', { params });
    return response.data;
  },

  getById: async (mediaId: number): Promise<Media> => {
    const response = await apiClient.get(`/api/v1/admin/media/${mediaId}`);
    return response.data;
  },

  delete: async (mediaId: number): Promise<void> => {
    await apiClient.delete(`/api/v1/admin/media/${mediaId}`);
  },

  getStats: async () => {
    const response = await apiClient.get('/api/v1/admin/media/stats/summary');
    return response.data;
  },

  cleanupFailed: async (daysOld: number = 7): Promise<void> => {
    await apiClient.post('/api/v1/admin/media/cleanup-failed', null, {
      params: { days_old: daysOld },
    });
  },
};

/**
 * Admin Payments API Service
 */
export const paymentsApi = {
  getAll: async (params?: PaginationParams & {
    status_filter?: string;
    date_from?: string;
    date_to?: string;
  }): Promise<Payment[]> => {
    const response = await apiClient.get('/api/v1/admin/payments', { params });
    return response.data;
  },

  getById: async (paymentId: number): Promise<Payment> => {
    const response = await apiClient.get(`/api/v1/admin/payments/${paymentId}`);
    return response.data;
  },

  getStats: async (days: number = 30) => {
    const response = await apiClient.get('/api/v1/admin/payments/stats/summary', {
      params: { days },
    });
    return response.data;
  },

  getDailyStats: async (days: number = 30) => {
    const response = await apiClient.get('/api/v1/admin/payments/stats/daily', {
      params: { days },
    });
    return response.data;
  },
};

/**
 * Admin Delivery Slots API Service
 */
export const deliverySlotsApi = {
  getAll: async (params?: {
    date_from?: string;
    date_to?: string;
    available_only?: boolean;
  }): Promise<DeliverySlot[]> => {
    const response = await apiClient.get('/api/v1/admin/delivery-slots', { params });
    return response.data;
  },

  getById: async (slotId: number): Promise<DeliverySlot> => {
    const response = await apiClient.get(`/api/v1/admin/delivery-slots/${slotId}`);
    return response.data;
  },

  create: async (data: DeliverySlotCreateRequest): Promise<DeliverySlot> => {
    const response = await apiClient.post('/api/v1/admin/delivery-slots', data);
    return response.data;
  },

  update: async (slotId: number, data: Partial<DeliverySlotCreateRequest>): Promise<DeliverySlot> => {
    const response = await apiClient.patch(`/api/v1/admin/delivery-slots/${slotId}`, data);
    return response.data;
  },

  delete: async (slotId: number, force: boolean = false): Promise<void> => {
    await apiClient.delete(`/api/v1/admin/delivery-slots/${slotId}`, {
      params: { force },
    });
  },

  getStats: async () => {
    const response = await apiClient.get('/api/v1/admin/delivery-slots/stats/summary');
    return response.data;
  },
};

/**
 * Admin Boxes API Service
 */
export const boxesApi = {
  getAll: async (params?: { is_active?: boolean }): Promise<Box[]> => {
    const response = await apiClient.get('/api/v1/admin/boxes', { params });
    return response.data;
  },

  getById: async (boxId: number): Promise<Box> => {
    const response = await apiClient.get(`/api/v1/admin/boxes/${boxId}`);
    return response.data;
  },

  create: async (data: BoxCreateRequest): Promise<Box> => {
    const response = await apiClient.post('/api/v1/admin/boxes', data);
    return response.data;
  },

  update: async (boxId: number, data: Partial<BoxCreateRequest>): Promise<Box> => {
    const response = await apiClient.patch(`/api/v1/admin/boxes/${boxId}`, data);
    return response.data;
  },

  delete: async (boxId: number): Promise<void> => {
    await apiClient.delete(`/api/v1/admin/boxes/${boxId}`);
  },
};

/**
 * Admin Coupons API Service
 */
export const couponsApi = {
  getAll: async (params?: { is_active?: boolean }): Promise<Coupon[]> => {
    const response = await apiClient.get('/api/v1/admin/coupons', { params });
    return response.data;
  },

  getById: async (couponId: number): Promise<Coupon> => {
    const response = await apiClient.get(`/api/v1/admin/coupons/${couponId}`);
    return response.data;
  },

  create: async (data: CouponCreateRequest): Promise<Coupon> => {
    const response = await apiClient.post('/api/v1/admin/coupons', data);
    return response.data;
  },

  update: async (couponId: number, data: Partial<CouponCreateRequest>): Promise<Coupon> => {
    const response = await apiClient.patch(`/api/v1/admin/coupons/${couponId}`, data);
    return response.data;
  },

  delete: async (couponId: number): Promise<void> => {
    await apiClient.delete(`/api/v1/admin/coupons/${couponId}`);
  },

  getStats: async () => {
    const response = await apiClient.get('/api/v1/admin/coupons/stats/summary');
    return response.data;
  },
};

/**
 * Admin Reports API Service
 */
export const reportsApi = {
  getSalesReport: async (params?: {
    date_from?: string;
    date_to?: string;
    group_by?: 'day' | 'week' | 'month';
  }) => {
    const response = await apiClient.get('/api/v1/admin/reports/sales', { params });
    return response.data;
  },

  getInventoryReport: async (lowStockThreshold: number = 10) => {
    const response = await apiClient.get('/api/v1/admin/reports/inventory', {
      params: { low_stock_threshold: lowStockThreshold },
    });
    return response.data;
  },

  getCustomersReport: async (params?: {
    date_from?: string;
    date_to?: string;
  }) => {
    const response = await apiClient.get('/api/v1/admin/reports/customers', { params });
    return response.data;
  },

  getProductsPerformance: async (params?: {
    date_from?: string;
    date_to?: string;
    category_id?: number;
    brand_id?: number;
  }) => {
    const response = await apiClient.get('/api/v1/admin/reports/products-performance', {
      params,
    });
    return response.data;
  },
};
