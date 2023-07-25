import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Department } from 'src/app/model/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {
addDepartmentRequest! : Department;
departmentForm! : FormGroup;
backendError : string = "";
constructor(
  private departmentService : DepartmentService,
  private router : Router, private fb : FormBuilder,
  private toast: NgToastService
  ){}

  ngOnInit(): void {
    this.departmentForm = this.fb.group({
      name : ['',Validators.required],
      status : ['Active',Validators.required]
    });
  }

addDepartment(){
  if(this.departmentForm.valid){
    this.addDepartmentRequest = this.departmentForm.value;
    this.departmentService.addDepartment(this.addDepartmentRequest).subscribe({
    next : (response) => {
      this.toast.success({detail:"SUCCESS",summary:response.message,duration:5000});
      this.router.navigateByUrl("department");
    },
    error : (err) => {
      this.backendError = err.error.message;
    }
  });
  }
}

get errors(){
  return this.departmentForm.controls;
}
}
