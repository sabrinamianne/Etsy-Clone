import { Component, OnInit} from '@angular/core';
import {Product} from '../product.model';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProductService]
})

export class AdminComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  submitForm(title: string, company: string, description: string, image:string, url:string, price: string, review: string) {
    var newProduct: Product = new Product(title, company, description, image, url, price, review);
    this.productService.addProduct(newProduct);
  }

}
