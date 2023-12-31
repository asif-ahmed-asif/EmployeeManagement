import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from './../../../model/employee.model';
import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/model/department.model';
import { DepartmentService } from 'src/app/services/department.service';
import { NgConfirmService } from 'ng-confirm-box';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees : Employee[] = [];
  dropdownValue : number = 0;
  departments : Department[] = [];
  constructor(
    private employeesService : EmployeesService,
    private departmentService : DepartmentService,
    private confirmService: NgConfirmService,
    private toast: NgToastService){}
  ngOnInit(): void {
    this.employeesService.getAllEmployees()
    .subscribe({
      next : (employees) => {
        this.employees = employees;
      },
      error : (response) => {

      }
    });

    this.departmentService.getAllDepartments().subscribe({
      next : (response) => {
        this.departments = response;
      }
    });
  }

  deleteEmployee(id : string){
    this.confirmService.showConfirm("Are you sure want to Delete?",
     () => {
      this.employeesService.deleteEmployee(id).subscribe({
        next : (response) => {
          this.toast.success({detail:"SUCCESS",summary:response.message,duration:5000});
          this.ngOnInit();
        },
        error : (err) => {
          this.toast.error({detail:"ERROR",summary:err.error.message,duration:5000});
        }
      });
    },
    () => {
      //yor logic if No clicked
    })
  }

  onSearchTextEntered(searchValue : string){
    if(!searchValue){
      this.ngOnInit();
    }
    this.employeesService.searchEmployee(searchValue).subscribe({
      next : (response) => {
        this.employees = response;
      },
      error : (err) =>{
        this.employees = [];
      }
    });
  }

}
