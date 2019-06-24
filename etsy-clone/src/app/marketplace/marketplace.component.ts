import { Component, OnInit} from '@angular/core';
import { Product } from '../product.model';
import {Router} from '@angular/router';
import {ProductService} from '../product.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [ProductService]
})
  export class MarketplaceComponent implements OnInit {
  products: FirebaseListObservable<any[]>;
  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(){
    this.products = this.productService.getProducts();
  }

  goToDetailPage(clickedProduct) {
    this.router.navigate(['products', clickedProduct.$key]);
  };

}
