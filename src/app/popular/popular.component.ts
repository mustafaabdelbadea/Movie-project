import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  populars:object[]=[];
  imgUrl:string="https://image.tmdb.org/t/p/original";
  constructor(_MovieService:MovieService,_Router:Router) {
    var token=localStorage.getItem('token');
    if(token==null){
      _Router.navigateByUrl("/login");
    } 
    else{
      _MovieService.getPopular().subscribe((data)=>{
      this.populars=data.results;
    });
    } 
    
  }
  ngOnInit(): void {
  }

}
