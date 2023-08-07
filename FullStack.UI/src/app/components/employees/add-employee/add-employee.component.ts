import { Employee } from './../../../model/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/model/department.model';
import { DepartmentService } from 'src/app/services/department.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { validateAllFormFields } from 'src/app/helper/validations.helper';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeRequest! : Employee;
  departments : Department[] = [];
  employeeForm! : FormGroup;
  backendError : string = "";
  constructor(
    private employeeService : EmployeesService,
    private router : Router,
    private departmentService : DepartmentService,
    private fb : FormBuilder,
    private toast: NgToastService){}

  ngOnInit(): void {
    this.departmentService.getAllDepartments().subscribe({
      next : (response) => {
        this.departments = response;
      }
    });
    this.employeeForm = this.fb.group({
      name : ['',Validators.required],
      email : ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone : ['',[Validators.required,Validators.maxLength(11),Validators.pattern("^[0-9]*$")]],
      salary : ['',[Validators.required,Validators.pattern("^[0-9]*\.?[0-9]+$")]],
      departmentId : ['',Validators.required]
    });
  }

  addEmployee(){
    if(this.employeeForm.valid){
      this.addEmployeeRequest = this.employeeForm.value;
      this.employeeService.addEmployee(this.addEmployeeRequest).subscribe({
        next : (response) => {
          this.toast.success({detail:"SUCCESS",summary:response.message,duration:5000});
          //this.router.navigateByUrl("employees");
          this.router.navigate(['employees']);
        },
        error : (err) => {
          this.backendError = err.error.message;
        }
      });
    }else{
      validateAllFormFields(this.employeeForm);
    }
  }

  get validation(){
    return this.employeeForm.controls;
  }
}
