import { Component, Input,  OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  providers: [ProductService]
})
export class EditProductComponent implements OnInit {
  @Input() selectedProduct;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  beginUpdatingProduct(productToUpdate){
    this.productService.updateProduct(productToUpdate);
  }

}
