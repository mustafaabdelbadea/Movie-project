import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PersonComponent } from './person/person.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TopratedComponent } from './toprated/toprated.component';
import { PopularComponent } from './popular/popular.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SeriesComponent } from './series/series.component';
import { VoteaverageComponent } from './voteaverage/voteaverage.component';
import { VotenewComponent } from './votenew/votenew.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'toprated',component:TopratedComponent},
  {path:'home',component:HomeComponent},
  {path:'movie',component:MoviesComponent},
  {path:'tv',component:TvComponent},
  {path:'popular',component:PopularComponent},
  {path:'upcoming',component:UpcomingComponent},
    {path:'voteaverage',component:VoteaverageComponent},
    {path:'votenew',component:VotenewComponent},
  {path:'person',component:PersonComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
