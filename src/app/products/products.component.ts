import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private title = 'List of Products';
  public products;
  constructor(public productResponse: ProductService) {
  }

  ngOnInit() {
    this.products = this.productResponse.getProducts();
  }

  public getTitle() {
    return this.title;
  }


}
