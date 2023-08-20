import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { validateAllFormFields } from 'src/app/helper/validations.helper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm! : FormGroup;
  backendError : string = "";
  matchError : string = "";
  type : string = "password";
  icon : string = "fa-eye-slash";
  cType : string = "password";
  cIcon : string = "fa-eye-slash";

  constructor(
    private router : Router,
    private fb : FormBuilder,
    private toast: NgToastService
  ){}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name : ['',Validators.required],
      email : ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password : ['',[Validators.required,
        Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$")]],
      cPassword : ['',Validators.required]
    });
  }

  signUp(){
    if(this.signUpForm.valid && this.matchError == ""){
      alert("h");
    }else{
      validateAllFormFields(this.signUpForm);
    }

  }

  get validation(){
    return this.signUpForm.controls;
  }

  showPassword(){
    if(this.type === "password"){
      this.type = "text";
      this.icon = "fa-eye";
    }else{
      this.type = "password";
      this.icon = "fa-eye-slash";
    }
  }

  showConfirmPassword(){
    if(this.cType === "password"){
      this.cType = "text";
      this.cIcon = "fa-eye";
    }else{
      this.cType = "password";
      this.cIcon = "fa-eye-slash";
    }
  }

  matchPassword(){
    const password = this.signUpForm.controls['password'].value;
    const confirmPassword = this.signUpForm.controls['cPassword'].value;
    if(password !== confirmPassword && this.validation['cPassword'].valid){
      this.matchError = "error";
    }else{
      this.matchError = "";
    }
  }

}
