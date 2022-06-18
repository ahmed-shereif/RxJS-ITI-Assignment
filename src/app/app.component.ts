import { Component } from '@angular/core';
import { Product } from './product';
import { ProductCategory } from './product-category';
import { Supplier } from './Supplier';
import  pData from './MOCK_DATA.json'
import { from, Observable, observable} from 'rxjs';
import { delay, delayWhen, map, take, tap} from 'rxjs/operators';

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
  constructor(){

  }
  ngOnInit(){

    const data=new Observable(obs=>{
      let i=0
      setInterval(()=>{

        obs.next(pData[i])
        i++;
      },1000)

    })
    data.pipe(take(10),tap(d=>console.log(d))).subscribe({next: (item:Product)=>this.products.push(item)})
  }

  onSelectedCategory(categoryId: string) {

  }

  onSelectedSupplier(supplierId: string) {

  }
}
