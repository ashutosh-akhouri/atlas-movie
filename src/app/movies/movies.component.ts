import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input() movies;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(idx){
    console.log("Added to cart: " + idx);
  }

}
