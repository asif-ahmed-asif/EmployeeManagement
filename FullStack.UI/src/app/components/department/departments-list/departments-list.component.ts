import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
import { Department } from 'src/app/model/department.model';
import { DepartmentService } from 'src/app/services/department.service';


@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {
  departments : Department[] = [];
  constructor(
    private departmentService : DepartmentService,
    private confirmService: NgConfirmService,
    private toast: NgToastService){}

  ngOnInit(): void {
    this.departmentService.getAllDepartments().subscribe({
      next : (response) => {
        this.departments = response;
      }
    });
  }

  changeDepartmentStatus(id : number) {
    this.confirmService.showConfirm("Are you sure want to change the Status?",
     () => {
      this.departmentService.changeDepartmentStatus(id).subscribe({
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
