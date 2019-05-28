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
  public userFromGit;
  public resultLoaded = false;
  constructor(public productResponse: ProductService,
    public loginService: LoginService) {
  }

  ngOnInit() {
    this.products = this.productResponse.getProducts();
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

  public onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log($event.target.value);
    }
  }
}
