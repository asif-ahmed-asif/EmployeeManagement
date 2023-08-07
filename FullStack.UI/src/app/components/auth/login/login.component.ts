import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  backendError : string = "";
  constructor(
    private router : Router,
    private fb : FormBuilder,
    private toast: NgToastService){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password : ['',Validators.required]
    })
  }


  get validation(){
    return this.loginForm.controls;
  }

}