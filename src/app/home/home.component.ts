import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesList;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getMovies().subscribe( (res) => {
      this.moviesList = res;
    });
  }

  applyFilter(filter){
    console.log(JSON.stringify(filter));
    this.data.getMovies(filter).subscribe( (res) => {
      this.moviesList = res;
    });
  }

}
