import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.scss']
})
export class TopratedComponent implements OnInit {

  
  top:object[]=[];
  imgUrl:string="https://image.tmdb.org/t/p/original";
  constructor(_MovieService:MovieService,_Router:Router) { 
    var token=localStorage.getItem('token');
    if(token==null){
      _Router.navigateByUrl("/login");
    } 
    else{
       _MovieService.getToprated().subscribe((data)=>{
      this.top=data.results;
    });
    }
   
  }
  ngOnInit(): void {
  }

}
