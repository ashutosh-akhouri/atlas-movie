import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input() movies;

  fontsize = 20;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addToCart(idx){
    console.log("Added to cart: " + idx);
  }

  switchToMovieDetail(i){
    let mov = this.movies[i];
    alert('movieDetail/'+mov._id);
    this.router.navigateByUrl('movieDetail/'+mov._id);
  }

  
}
