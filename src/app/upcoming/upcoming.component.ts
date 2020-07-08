import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  upcomes:object[]=[];
  imgUrl:string="https://image.tmdb.org/t/p/original";
  constructor(_MovieService:MovieService) { 
    _MovieService.getUpcoming().subscribe((data)=>{
      this.upcomes=data.results;
    });
  }
  logout(){
    localStorage.removeItem('token');
    window.location.reload();
  
  }
  ngOnInit(): void {
  }

}
