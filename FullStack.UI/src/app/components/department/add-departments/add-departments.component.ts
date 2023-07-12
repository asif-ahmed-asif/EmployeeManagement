import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/model/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent {
addDepartmentRequest : Department = {
  id : 0,
  name : '',
  status : 'Active'
}
constructor(private departmentService : DepartmentService, private router : Router){}

addDepartment(){
  this.departmentService.addDepartment(this.addDepartmentRequest).subscribe({
    next : (response) => {
      this.router.navigateByUrl("department");
    }
  });
}
}
