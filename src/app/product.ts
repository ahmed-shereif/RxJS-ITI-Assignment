/* Defines the product entity */
export class Product {
  id: number;
  productName: string;
  productCode?: string;
  description?: string;
  price?: number;
  categoryId?: number;
  quantityInStock?: number;
  searchKey?: string[];
  supplierId?: number;
}
