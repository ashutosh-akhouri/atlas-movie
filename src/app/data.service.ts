import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { }

  getMovies(options?){
    let str = ""; // query string
    if(options && options.year){
      str += "?year="+options.year;
    }
    // http://localhost:3000/api/movies/?year=2000
    return this.http.get('http://localhost:3000/api/movies'+str);
  }
}
