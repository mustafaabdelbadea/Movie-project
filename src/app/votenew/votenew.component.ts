import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-votenew',
  templateUrl: './votenew.component.html',
  styleUrls: ['./votenew.component.scss']
})
export class VotenewComponent implements OnInit {
  searchText:any;
  new:object[]=[];
  imgUrl:string="https://image.tmdb.org/t/p/original";
  constructor(_MovieService:MovieService) { 
    _MovieService.getNew().subscribe((data)=>{
      this.new=data.results;
    });
  }
  
  logout(){
    localStorage.removeItem('token');
    window.location.reload();
  
  }
  ngOnInit(): void {
  }

}
