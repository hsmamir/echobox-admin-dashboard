/**
 * EchoBox Admin API Client
 * 
 * Main entry point for all API services
 * Import services from this file for easier usage
 */

export { default as apiClient } from './config';
export * from './config';
export * from './types';

// Services
export { authApi } from './services/auth';
export { dashboardApi } from './services/dashboard';
export { usersApi } from './services/users';
export { productsApi, variantsApi } from './services/products';
export { ordersApi } from './services/orders';
export { categoriesApi, brandsApi } from './services/categories-brands';
export {
  slidersApi,
  mediaApi,
  paymentsApi,
  deliverySlotsApi,
  boxesApi,
  couponsApi,
  reportsApi,
} from './services/misc';
