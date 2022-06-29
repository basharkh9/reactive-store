export default interface Product {
  id: number;
  name: string;
  category: { id: number; name: string };
  desc: string;
  cpu: string;
  ram: number;
  sku: string;
  price: number;
  imag_url: string;
}

export interface ProductWithCoupon extends Product {
  discount_price: number;
}
