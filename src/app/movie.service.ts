import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http' ;
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public _HttpClient:HttpClient) {
    
   }
   getAllMovies():Observable<any>
   {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/week?api_key=6de12df8244404b3c5dcbf68134b3f74");
    
  }
  getMovies():Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=6de12df8244404b3c5dcbf68134b3f74");
  }
  getPerson():Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/movie/now_playing?api_key=6de12df8244404b3c5dcbf68134b3f74&language=en-US&page=1");
  }
  getTv():Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/week?api_key=6de12df8244404b3c5dcbf68134b3f74");
  }
 
}
