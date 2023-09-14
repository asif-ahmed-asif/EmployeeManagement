import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { validateAllFormFields } from 'src/app/helper/validations.helper';
import { User } from 'src/app/model/user.mode';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  addUser! : User;
  backendError : string = "";
  type : string = "password";
  icon : string = "fa-eye-slash";

  constructor(
    private router : Router,
    private fb : FormBuilder,
    private toast: NgToastService,
    private authService : AuthService
    ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password : ['',Validators.required]
    });
  }

  login(){
    if(this.loginForm.valid){
      this.addUser = this.loginForm.value;
      this.authService.login(this.addUser).subscribe({
        next : (response) => {
          this.toast.success({detail:"SUCCESS",summary:response.message,duration:5000});
          this.router.navigateByUrl("adminDashboard");
        },
        error : (err) => {
          this.toast.error({detail:"ERROR",summary:err.error.message,duration:5000});
        }
      });
    }else{
      validateAllFormFields(this.loginForm);
    }

  }

  get validation(){
    return this.loginForm.controls;
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

}
