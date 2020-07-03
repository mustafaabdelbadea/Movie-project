import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movie:object[]=[];
  imgUrl:string="https://image.tmdb.org/t/p/original";
  constructor(_MovieService:MovieService, _Router:Router) {
    var token=localStorage.getItem('token');
    if(token==null){
      _Router.navigateByUrl("/login");
    } 
    else{
      _MovieService.getMovies().subscribe((data)=>{
        this.movie=data.results;
      });
    } 
   

  }
  ngOnInit(): void {
  }

}
