import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie = {fullplot:'qqqqqqqqqqqqqqqqqqqqqqqqqqqqq ffffffffffff'};

  constructor(private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let movId = this.actRoute.snapshot.params["id"];
    alert(movId);
  }

}
