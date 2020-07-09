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
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'toprated',component:TopratedComponent,canActivate:[AuthGuardService]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
  {path:'movie',component:MoviesComponent,canActivate:[AuthGuardService]},
  {path:'tv',component:TvComponent,canActivate:[AuthGuardService]},
  {path:'popular',component:PopularComponent,canActivate:[AuthGuardService]},
  {path:'upcoming',component:UpcomingComponent,canActivate:[AuthGuardService]},
  {path:'voteaverage',component:VoteaverageComponent,canActivate:[AuthGuardService]},
  {path:'votenew',component:VotenewComponent,canActivate:[AuthGuardService]},
  {path:'person',component:PersonComponent,canActivate:[AuthGuardService]},
 
  {path:'series',component:SeriesComponent,canActivate:[AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
