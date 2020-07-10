import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  searchText:any;
  tv:object[]=[];
  imgUrl:string="https://image.tmdb.org/t/p/original";
  constructor(_MovieService:MovieService) { 
    _MovieService.getTv().subscribe((data)=>{
      this.tv=data.results;
    });

  }
  logout(){
    localStorage.removeItem('token');
    window.location.reload();
  
  }
  ngOnInit(): void {
  }

}
