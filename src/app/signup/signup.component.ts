import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm=new FormGroup({
    'first_name':new FormControl(),
    'last_name':new FormControl(),
    'age':new FormControl(),
    'email':new FormControl(),
    'password':new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
