import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private title = 'List of Products';
  public products;
  public product;
  public userFromGit;
  public counter;
  public email;
  public parentStateCHange;
  public verifiedStatus;
  public resultLoaded = false;
  constructor(public productResponse: ProductService,
    public loginService: LoginService) {
  }

  ngOnInit() {
    this.counter = 0;
    //this.products = this.productResponse.getProducts();
    this.product = this.productResponse.getProduct();
    this.email = 'manojkumar@gmail.com';
  }


  fetchUserEvent() {
    this.getUsers();
  }

  addAnItem() {
    this.products.push({id: 4, name: 'One Plus 3t', value: '10000'});
  }

  removeAnItem() {
    this.products.pop();
  }

  public getProducts() {
    this.products = this.productResponse.getProducts();
  }

  public getTitle() {
    return this.title;
  }

  public trackProduct(index, product) {
    console.log(product.id);
    return product ? product.id : undefined;
  }

  public getUsers() {
    this.loginService.getGitHubUsers().subscribe((data) => {
      console.log(data);
      this.userFromGit = data;
      this.resultLoaded = true;
    }, (err) => {
      this.resultLoaded = false;
      console.log(err);
    });
  }

  public onKeyUp() {
    console.log(this.email);
  }

  passData() {
    this.counter++;
    this.parentStateCHange = {
      name: 'Manoj',
      action: 'PassingData from parent to child',
      counter: this.counter
    };
  }

  parentDataFromChild(data) {
    this.verifiedStatus = data;
  }
}
