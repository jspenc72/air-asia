import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, RouterState } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder, private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.loginFormGroup = this._formBuilder.group({
      email: ['email', Validators.required],
      password: ['password', Validators.required]
    });    
  }

  clickedLogin(): void {
    console.log("clickedLogin!");
    console.log(this.loginFormGroup.value);
    this.authService.sendLoginRequest(this.loginFormGroup.value)
    this.authService.sendLoginRequest(this.loginFormGroup.value).subscribe((data: any)=>{
      console.log("data", data);
    })   
  }

}
