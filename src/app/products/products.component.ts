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
  public email;
  public stateCHange;
  public resultLoaded = false;
  constructor(public productResponse: ProductService,
    public loginService: LoginService) {
  }

  ngOnInit() {
    this.products = this.productResponse.getProducts();
    this.product = this.productResponse.getProduct();
    this.email = 'manojkumar@gmail.com';
  }


  fetchUserEvent() {
    this.getUsers();
  }

  public getTitle() {
    return this.title;
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
    this.stateCHange = {
      name: 'Manoj',
      action: 'PassingData from parent to child'
    };
  }
}
