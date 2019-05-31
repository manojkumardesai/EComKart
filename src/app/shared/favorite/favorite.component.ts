import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() childUserInfo: any;
  @Output() childVerified = new EventEmitter();
  isFavorite: boolean;
  constructor() { }

  ngOnInit() {
  }

  toggleFavorite() {
    console.log('child triggered');
    this.isFavorite = !this.isFavorite;
    this.childVerified.emit(this.isFavorite);
  }
}
