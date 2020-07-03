import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-votenew',
  templateUrl: './votenew.component.html',
  styleUrls: ['./votenew.component.scss']
})
export class VotenewComponent implements OnInit {

  new:object[]=[];
  imgUrl:string="https://image.tmdb.org/t/p/original";
  constructor(_MovieService:MovieService, _Router:Router) { 
    var token=localStorage.getItem('token');
    if(token==null){
      _Router.navigateByUrl("/login");
    } 
    else
    {
        _MovieService.getNew().subscribe((data)=>{
      this.new=data.results;
    });
    }
  
  }
  

  ngOnInit(): void {
  }

}
