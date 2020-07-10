import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  searchText:any;

  movie:object[]=[];
  imgUrl:string="https://image.tmdb.org/t/p/original";
  constructor(_MovieService:MovieService) { 
    _MovieService.getMovies().subscribe((data)=>{
      this.movie=data.results;
    });

  }
  logout(){
    localStorage.removeItem('token');
    window.location.reload();
  
  }
  ngOnInit(): void {
  }

}
