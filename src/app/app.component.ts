import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EcomKart';
  viewMode: String = '';

  changeViewMode(view) {
    this.viewMode = view;
  }
}


