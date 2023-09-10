import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { validateAllFormFields } from 'src/app/helper/validations.helper';
import { User } from 'src/app/model/user.mode';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm! : FormGroup;
  backendError : string = "";
  matchError : string = "";
  addUser! : User;
  type : string = "password";
  icon : string = "fa-eye-slash";
  cType : string = "password";
  cIcon : string = "fa-eye-slash";

  constructor(
    private router : Router,
    private fb : FormBuilder,
    private toast: NgToastService,
    private authService : AuthService
  ){}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name : ['',Validators.required],
      email : ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password : ['',[Validators.required,
        Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!@$%^&*_\-]).{8,}$")]],
      confirmPassword : ['',Validators.required]
    });
  }

  signUp(){
    if(this.signUpForm.valid && this.matchError == ""){
      this.addUser = this.signUpForm.value;
      console.log(this.addUser);
      this.authService.addUser(this.addUser).subscribe({
        next : (response) => {
          this.toast.success({detail:"SUCCESS",summary:response.message,duration:5000});
          //this.router.navigateByUrl("employees");
        },
        error : (err) => {
          this.backendError = err.error.message;
        }
      });
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
    const confirmPassword = this.signUpForm.controls['confirmPassword'].value;
    if(password !== confirmPassword && this.validation['confirmPassword'].valid){
      this.matchError = "error";
    }else{
      this.matchError = "";
    }
  }

}
