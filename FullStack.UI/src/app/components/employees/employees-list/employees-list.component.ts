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
      next : (results) => {
        this.employees = results;
      },
      error : (response) => {

      }
    })

  }

}
