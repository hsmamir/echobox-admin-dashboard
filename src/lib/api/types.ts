// ============================================
// Common Types
// ============================================
export interface PaginationParams {
  page?: number;
  page_size?: number;
  skip?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  page_size: number;
  total_pages?: number;
  has_next?: boolean;
  has_prev?: boolean;
}

// ============================================
// User Types
// ============================================
export interface User {
  id: number;
  email: string | null;
  full_name: string | null;
  phone: string;
  is_admin: boolean;
  phone_verified: boolean;
  total_orders?: number;
  total_spent?: number;
}

export interface UserDetail extends User {
  total_orders: number;
  total_spent: number;
  recent_orders: any[];
}

export interface UserCreateRequest {
  email?: string;
  full_name?: string;
  phone: string;
  password: string;
  is_admin?: boolean;
  phone_verified?: boolean;
}

export interface UserUpdateRequest {
  email?: string;
  full_name?: string;
  phone?: string;
  is_admin?: boolean;
  phone_verified?: boolean;
}

// ============================================
// Product Types
// ============================================
export interface Product {
  id: number;
  name: string;
  slug: string;
  description?: string;
  short_description?: string;
  brand_id?: number;
  brand_name?: string;
  category_id?: number;
  category_name?: string;
  sku_base?: string;
  is_active: boolean;
  is_featured: boolean;
  min_price?: number;
  max_price?: number;
  total_stock: number;
  variants_count?: number;
  created_at: string;
  updated_at: string;
}

export interface ProductVariant {
  id: number;
  product_id: number;
  sku: string;
  barcode?: string;
  price: number;
  sale_price?: number;
  cost_price?: number;
  color_id?: number;
  size?: string;
  material?: string;
  stock_quantity: number;
  available_stock: number;
  is_active: boolean;
  is_default: boolean;
}

export interface ProductCreateRequest {
  name: string;
  slug: string;
  description?: string;
  short_description?: string;
  brand_id?: number;
  category_id?: number;
  sku_base?: string;
  is_active?: boolean;
  is_featured?: boolean;
  meta_title?: string;
  meta_description?: string;
  attributes?: Record<string, any>;
}

export interface ProductUpdateRequest {
  name?: string;
  slug?: string;
  description?: string;
  short_description?: string;
  brand_id?: number;
  category_id?: number;
  sku_base?: string;
  is_active?: boolean;
  is_featured?: boolean;
  meta_title?: string;
  meta_description?: string;
  attributes?: Record<string, any>;
}

// ============================================
// Order Types
// ============================================
export type OrderStatus = 
  | 'pending'
  | 'awaiting_payment'
  | 'awaiting_admin_confirmation'
  | 'cash_on_delivery'
  | 'paid'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'failed';

export interface Order {
  id: number;
  status: OrderStatus;
  subtotal: number;
  packaging_cost: number;
  shipping_cost: number;
  tax_amount: number;
  discount_amount: number;
  total_price: number;
  packaging_type?: string;
  note_text?: string;
  shipping_tracking_code?: string;
  items: OrderItem[];
  created_at: string;
  paid_at?: string;
  shipped_at?: string;
  delivered_at?: string;
}

export interface OrderItem {
  id: number;
  variant_id: number;
  sku: string;
  product_name: string;
  variant_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
}

export interface OrderStatusUpdate {
  new_status: OrderStatus;
  notes?: string;
}

// ============================================
// Category Types
// ============================================
export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
  parent_id?: number;
  sort_order: number;
  is_active: boolean;
  products_count?: number;
}

export interface CategoryCreateRequest {
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
  parent_id?: number;
  sort_order?: number;
  is_active?: boolean;
}

// ============================================
// Brand Types
// ============================================
export interface Brand {
  id: number;
  name: string;
  slug: string;
  description?: string;
  logo_url?: string;
  is_active: boolean;
  products_count?: number;
}

export interface BrandCreateRequest {
  name: string;
  slug: string;
  description?: string;
  logo_url?: string;
  is_active?: boolean;
}

// ============================================
// Slider Types
// ============================================
export type SliderStatus = 'active' | 'inactive' | 'scheduled';

export interface Slider {
  id: number;
  title: string;
  subtitle?: string;
  image_url: string;
  link_url?: string;
  button_text?: string;
  sort_order: number;
  is_active: boolean;
  click_count?: number;
  view_count?: number;
  created_at: string;
  updated_at: string;
}

export interface SliderCreateRequest {
  title: string;
  subtitle?: string;
  image_url: string;
  link_url?: string;
  button_text?: string;
  sort_order?: number;
  is_active?: boolean;
}

// ============================================
// Media Types
// ============================================
export type MediaStatus = 'PENDING' | 'PROCESSING' | 'READY' | 'FAILED';

export interface Media {
  id: number;
  user_id: number;
  original_filename: string;
  file_type: string;
  file_size: number;
  upload_path: string;
  processed_path?: string;
  processing_status: MediaStatus;
  created_at: string;
}

// ============================================
// Payment Types
// ============================================
export interface Payment {
  id: number;
  order_id: number;
  user_id: number;
  amount: number;
  status: string;
  transaction_id: string;
  gateway_reference?: string;
  created_at: string;
}

// ============================================
// Delivery Types
// ============================================
export interface DeliverySlot {
  id: number;
  date: string;
  start_time: string;
  end_time: string;
  capacity: number;
  reserved_count: number;
  available: number;
}

export interface DeliverySlotCreateRequest {
  date: string;
  start_time: string;
  end_time: string;
  capacity?: number;
}

// ============================================
// Box Types
// ============================================
export interface Box {
  id: number;
  name: string;
  width_cm: number;
  height_cm: number;
  depth_cm: number;
  volume_cm3: number;
  max_weight_kg: number;
  base_price: number;
  is_active: boolean;
}

export interface BoxCreateRequest {
  name: string;
  width_cm: number;
  height_cm: number;
  depth_cm: number;
  max_weight_kg: number;
  base_price: number;
  is_active?: boolean;
}

// ============================================
// Coupon Types
// ============================================
export interface Coupon {
  id: number;
  code: string;
  description?: string;
  discount_type: string;
  discount_value: number;
  min_order_amount?: number;
  max_discount_amount?: number;
  max_uses?: number;
  max_uses_per_user: number;
  valid_from: string;
  valid_until: string;
  is_active: boolean;
  times_used: number;
}

export interface CouponCreateRequest {
  code: string;
  description?: string;
  discount_type: string;
  discount_value: number;
  min_order_amount?: number;
  max_discount_amount?: number;
  max_uses?: number;
  max_uses_per_user?: number;
  valid_from: string;
  valid_until: string;
  is_active?: boolean;
}

// ============================================
// Dashboard Stats Types
// ============================================
export interface DashboardOverview {
  total_revenue: number;
  total_orders: number;
  total_customers: number;
  pending_orders: number;
  revenue_change: number;
  orders_change: number;
  customers_change: number;
}

export interface SalesChartData {
  date: string;
  revenue: number;
  orders: number;
}

export interface TopProduct {
  product_id: number;
  product_name: string;
  total_sold: number;
  revenue: number;
}

// ============================================
// Filter & Sort Types
// ============================================
export interface ProductFilters {
  search?: string;
  brand_id?: number;
  category_id?: number;
  is_active?: boolean;
  is_featured?: boolean;
  include_deleted?: boolean;
}

export interface OrderFilters {
  status_filter?: OrderStatus;
  date_from?: string;
  date_to?: string;
}

// ============================================
// API Response Types
// ============================================
export interface ApiResponse<T = any> {
  data?: T;
  message?: string;
  success?: boolean;
}

export interface ApiError {
  detail?: string | { loc: string[]; msg: string; type: string }[];
  message?: string;
}
