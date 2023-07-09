import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeDetails : Employee = {
    id : '',
    name : '',
    email : '',
    phone : 0,
    salary : 0,
    department : 0
  }

  constructor(private route : ActivatedRoute, private employeeService : EmployeesService, private router : Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (response) => {
        const id = response.get('id');

        if(id){
          this.employeeService.getEmployee(id).subscribe({
            next : (details) => {
              this.employeeDetails = details;
            }
          });
        }
      }
    });
  }

  editEmployee(){
    this.employeeService.editEmployee(this.employeeDetails).subscribe({
      next : (response) => {
        this.router.navigate(['employees']);
       //this.router.navigateByUrl("employees");
      }
    });
  }



}
