import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  all:object[]=[];
  imgUrl:string="https://image.tmdb.org/t/p/original";
  constructor(_MovieService:MovieService ,_Router:Router) {
    var token=localStorage.getItem('token');
    if(token==null){
      _Router.navigateByUrl("/login");
    } 
    else{
      _MovieService.getAllMovies().subscribe((data)=>{
        this.all=data.results;
      });
  
    }
   
  }
logout(){
  localStorage.removeItem('token');
}
  ngOnInit(): void {
  }

}
