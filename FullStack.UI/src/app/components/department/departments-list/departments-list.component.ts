import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/model/department.model';
import { DepartmentService } from 'src/app/services/department.service';


@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {
  departments : Department[] = [];
  constructor(private departmentService : DepartmentService){}

  ngOnInit(): void {
    this.departmentService.getAllDepartments().subscribe({
      next : (response) => {
        this.departments = response;
      }
    });
  }

  changeDepartmentStatus(id : number) {
    this.departmentService.changeDepartmentStatus(id).subscribe({
      next : (response) => {
        this.ngOnInit();
      }
    });
  }

  onSearchTextEntered(searchValue : string){
    console.log(searchValue);
    if(!searchValue){
      this.ngOnInit();
    }
    this.departmentService.searchEmployee(searchValue).subscribe({
      next : (response) => {
        this.departments = response;
      },
      error : (err) =>{
        this.departments = [];
      }
    });
  }

}
