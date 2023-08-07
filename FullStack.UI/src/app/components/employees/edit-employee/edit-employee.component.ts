import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { validateAllFormFields } from 'src/app/helper/validations.helper';
import { Department } from 'src/app/model/department.model';
import { Employee } from 'src/app/model/employee.model';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeDetails! : Employee;
  departments : Department[] = [];
  editEmployeeForm! : FormGroup;
  backendError : string = "";
  constructor(
    private route : ActivatedRoute,
    private employeeService : EmployeesService,
    private router : Router,
    private departmentService : DepartmentService,
    private fb : FormBuilder,
    private toast: NgToastService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (response) => {
        const id = response.get('id');

        if(id){
          this.employeeService.getEmployee(id).subscribe({
            next : (details) => {
              this.editEmployeeForm = this.fb.group({
                id : details.id,
                name : [details.name,Validators.required],
                email : [details.email,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
                phone : [details.phone,[Validators.required,Validators.maxLength(11),Validators.pattern("^[0-9]*$")]],
                salary : [details.salary,[Validators.required,Validators.pattern("^[0-9]*\.?[0-9]+$")]],
                departmentId : [details.departmentId,Validators.required]
              });
            },
            error : (err) => {
              alert(err.error.message);
            }
          });
        }
      }
    });

    this.departmentService.getAllDepartments().subscribe({
      next : (response) => {
        this.departments = response;
      }
    });
  }

  editEmployee(){
    if(this.editEmployeeForm.valid){
      this.employeeDetails = this.editEmployeeForm.value;
      this.employeeService.editEmployee(this.employeeDetails).subscribe({
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
      validateAllFormFields(this.editEmployeeForm);
    }
  }

  get validation(){
    return this.editEmployeeForm.controls;
  }



}
