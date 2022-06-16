import { Component } from '@angular/core';
import { Product } from './product';
import { ProductCategory } from './product-category';
import { Supplier } from './Supplier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'assignment1';
  products: Product[] = [];
  productsCount: number = 0;
  categories: ProductCategory[];
  suppliers: Supplier[];

  onSelectedCategory(categoryId: string) {

  }

  onSelectedSupplier(supplierId: string) {

  }
}
