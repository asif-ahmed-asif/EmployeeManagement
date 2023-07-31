import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Department } from 'src/app/model/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-edit-departments',
  templateUrl: './edit-departments.component.html',
  styleUrls: ['./edit-departments.component.css']
})
export class EditDepartmentsComponent implements OnInit {
  departmentDetails! : Department;
  editDepartmentForm! : FormGroup;
  backendError : string = "";

  constructor(
    private departmentService : DepartmentService,
    private router : Router,
    private route : ActivatedRoute,
    private toast: NgToastService,
    private fb : FormBuilder
    ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (response) => {
        const id = response.get('id');

        if(id){
          this.departmentService.getDepartment(id).subscribe({
            next : (department) => {
              this.editDepartmentForm = this.fb.group({
                id : department.id,
                name : [department.name,Validators.required],
                status : [department.status,Validators.required]
              });
            },
            error : (err) => {
              alert(err.error.message);
            }
          });
        }
      }
    });
  }

  editDepartment(){
    if(this.editDepartmentForm.valid){
      this.departmentDetails = this.editDepartmentForm.value;
      this.departmentService.editDepartment(this.departmentDetails).subscribe({
        next : (response) => {
          this.toast.success({detail:"SUCCESS",summary:response.message,duration:5000});
          this.router.navigate(['department']);
        },
        error : (err) => {
          this.backendError = err.error.message;
        }
      });
    }
  }

  get errors(){
    return this.editDepartmentForm.controls;
  }

}
