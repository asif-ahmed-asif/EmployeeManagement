import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from './../../../model/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees : Employee[] = [];
  constructor(private employeesService : EmployeesService){}
  ngOnInit(): void {
    this.employeesService.getAllEmployees()
    .subscribe({
      next : (employees) => {
        this.employees = employees;
      },
      error : (response) => {

      }
    })

  }

  deleteEmployee(id : string){
    this.employeesService.deleteEmployee(id).subscribe({
      next : (response) => {
        this.ngOnInit();
      }
    });
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
