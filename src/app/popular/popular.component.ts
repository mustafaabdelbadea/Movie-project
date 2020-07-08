import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  populars:object[]=[];
  imgUrl:string="https://image.tmdb.org/t/p/original";
  constructor(_MovieService:MovieService) { 
    _MovieService.getPopular().subscribe((data)=>{
      this.populars=data.results;
    });
  }
  logout(){
    localStorage.removeItem('token');
    window.location.reload();
  
  }
  ngOnInit(): void {
  }

}
