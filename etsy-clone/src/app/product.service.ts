import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-products';
import { Product } from './product.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProductService {
  products: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.products = database.list('products');
  }

  getProducts() {
    return this.products;
  }

  getProductById(productId: number){
   for (var i = 0; i <= PRODUCTS.length - 1; i++) {
     if (PRODUCTS[i].id === productId) {
       return PRODUCTS[i];
     }
   }
 }

}
