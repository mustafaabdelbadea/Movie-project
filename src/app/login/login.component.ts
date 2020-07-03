import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms'
import {AuthService } from"../auth.service";
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm=new FormGroup({
    
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
  });
  signIn(){
    this._AuthService.login(this.signinForm.value).subscribe(data=>{
     // console.log(data);
      if(data.message=='success')
      {
        localStorage.setItem('token',data.token);

        this._Router.navigateByUrl("/home");
      }
     else{
       alert('Invalid Email or Password');
     }
    },
    err=>{
      console.log(err);
    });
     
}
  constructor(private _AuthService:AuthService, private _Router:Router) { }

  ngOnInit(): void {
  }

}
