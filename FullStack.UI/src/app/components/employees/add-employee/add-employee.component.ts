import { Employee } from './../../../model/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/model/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeRequest : Employee = {
    id : '00000000-0000-0000-0000-000000000000',
    name : '',
    email : '',
    phone : '',
    salary : 0,
    departmentId : 0,
    department : null
  }
  departments : Department[] = [];
  constructor(private employeeService : EmployeesService, private router : Router, private departmentService : DepartmentService){}

  ngOnInit(): void {
    this.departmentService.getAllDepartments().subscribe({
      next : (response) => {
        this.departments = response;
      }
    });
  }

  addEmployee(){
    this.employeeService.addEmployee(this.addEmployeeRequest).subscribe({
      next : (response) => {
        //this.router.navigateByUrl("employees");
        this.router.navigate(['employees']);
      }
    });
  }

}
