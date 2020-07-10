import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  all:any[]=[];

  searchText:any;
  imgUrl:string="https://image.tmdb.org/t/p/original";
  constructor(_MovieService:MovieService, private _NgxSpinnerService:NgxSpinnerService) { 
   
   _NgxSpinnerService.show()
    _MovieService.getAllMovies().subscribe((data)=>{
      this.all=data.results;
      setTimeout(() => {
        this._NgxSpinnerService.hide();
      }, 2000);
    });

  }
logout(){
  localStorage.removeItem('token');
  window.location.reload();

}
  ngOnInit(): void {
  }

}
