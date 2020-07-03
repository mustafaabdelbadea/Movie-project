import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  person:object[]=[];
  imgUrl:string="https://image.tmdb.org/t/p/original";
  constructor(_MovieService:MovieService , _Router:Router) { 
    var token=localStorage.getItem('token');
    if(token==null){
      _Router.navigateByUrl("/login");
    } else{
        _MovieService.getPerson().subscribe((data)=>{
      this.person=data.results;
    });

    }
  
    
  }
  ngOnInit(): void {
  }

}
