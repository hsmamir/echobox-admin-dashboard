import apiClient from '../config';
import { DashboardOverview, SalesChartData, TopProduct } from '../types';

/**
 * Admin Dashboard API Service
 * Endpoints for dashboard statistics and analytics
 */
export const dashboardApi = {
  /**
   * Get dashboard overview metrics
   * @param days - Number of days for comparison (default: 30)
   */
  getOverview: async (days: number = 30): Promise<DashboardOverview> => {
    const response = await apiClient.get('/api/v1/admin/dashboard/overview', {
      params: { days },
    });
    return response.data;
  },

  /**
   * Get recent activity and orders
   * @param limit - Number of records to return
   */
  getRecentActivity: async (limit: number = 20) => {
    const response = await apiClient.get('/api/v1/admin/dashboard/recent-activity', {
      params: { limit },
    });
    return response.data;
  },

  /**
   * Get top-selling products
   * @param limit - Number of products to return
   * @param days - Time period in days
   */
  getTopProducts: async (limit: number = 10, days: number = 30): Promise<TopProduct[]> => {
    const response = await apiClient.get('/api/v1/admin/dashboard/top-products', {
      params: { limit, days },
    });
    return response.data;
  },

  /**
   * Get sales chart data
   * @param days - Number of days to fetch
   */
  getSalesChart: async (days: number = 30): Promise<SalesChartData[]> => {
    const response = await apiClient.get('/api/v1/admin/dashboard/sales-chart', {
      params: { days },
    });
    return response.data;
  },
};
