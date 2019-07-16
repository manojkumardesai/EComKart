import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';
import { LoginService } from './login.service';
import { FavoriteComponent } from './shared/favorite/favorite.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.service';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FavoriteComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    CoursesComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService,
    LoginService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
