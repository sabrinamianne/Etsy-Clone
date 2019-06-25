import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProductService {
  constructor(private database: AngularFireDatabase) {
    this.products = database.list('products');
  }
  products: FirebaseListObservable<any[]>;

  getProducts() {
    return this.products;
  }

  addProduct(newProduct: Product) {
    this.products.push(newProduct)
  }

  getProductById(productId: string){
   return this.database.object('products/'+ productId)
 }

 updateProduct(localUpdatedProduct) {
   var productEntryInFirebase = this.getProductById(localUpdatedProduct.$key);
   productEntryInFirebase.update({title: localUpdatedProduct.title,
                                  company: localUpdatedProduct.company,
                                  description: localUpdatedProduct.description,
                                  image: localUpdatedProduct.image,
                                  url: localUpdatedProduct.url,
                                  price: localUpdatedProduct.price,
                                  review: localUpdatedProduct.review});
 }

 deleteAlbum(localProductToDelete) {
   var productEntryInFirebase = this.getProductById(localProductToDelete.$key);
   productEntryInFirebase.remove();
 }

}
