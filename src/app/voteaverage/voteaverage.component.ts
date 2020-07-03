import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voteaverage',
  templateUrl: './voteaverage.component.html',
  styleUrls: ['./voteaverage.component.scss']
})
export class VoteaverageComponent implements OnInit {

  average:object[]=[];
  imgUrl:string="https://image.tmdb.org/t/p/original";
  constructor(_MovieService:MovieService,_Router:Router) { 
    var token=localStorage.getItem('token');
    if(token==null){
      _Router.navigateByUrl("/login");
    } 
    else{
       _MovieService.getVoteaverage().subscribe((data)=>{
      this.average=data.results;
    });
    }
   
  }
  ngOnInit(): void {
  }

}
