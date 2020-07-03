import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  series:object[]=[];
  //imgUrl:string="https://image.tmdb.org/t/p/original";
  constructor(_MovieService:MovieService, _Router:Router) { 
    var token=localStorage.getItem('token');
    if(token==null){
      _Router.navigateByUrl("/login");
    } 
    else{
        _MovieService.getSeries().subscribe((data)=>{
      
      console.log(data.tv_shows)
      this.series=data.tv_shows;
    });
    }
  
  }
  ngOnInit(): void {
  }

}
