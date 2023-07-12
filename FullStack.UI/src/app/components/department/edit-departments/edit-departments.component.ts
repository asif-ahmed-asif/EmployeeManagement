import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/model/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-edit-departments',
  templateUrl: './edit-departments.component.html',
  styleUrls: ['./edit-departments.component.css']
})
export class EditDepartmentsComponent implements OnInit {
  departmentDetails : Department = {
    id : 0,
    name : '',
    status : ''
  }

  constructor(private departmentService : DepartmentService, private router : Router, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (response) => {
        const id = response.get('id');

        if(id){
          this.departmentService.getDepartment(id).subscribe({
            next : (details) => {
              this.departmentDetails = details;
            }
          });
        }
      }
    });
  }

  editDepartment(){
    this.departmentService.editDepartment(this.departmentDetails).subscribe({
      next : (response) => {
        this.router.navigate(['department']);
      }
    });
  }

}
