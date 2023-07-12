import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { DepartmentsListComponent } from './components/department/departments-list/departments-list.component';
import { AddDepartmentsComponent } from './components/department/add-departments/add-departments.component';
import { EditDepartmentsComponent } from './components/department/edit-departments/edit-departments.component';

const routes: Routes = [
  {
    path : '',
    component : EmployeesListComponent
  },
  {
    path : 'employees',
    component : EmployeesListComponent
  },
  {
    path : 'employees/add',
    component : AddEmployeeComponent
  },
  {
    path : 'employees/edit/:id',
    component : EditEmployeeComponent
  },
  {
    path : 'department',
    component : DepartmentsListComponent
  },
  {
    path : 'department/add',
    component : AddDepartmentsComponent
  },
  {
    path : 'department/edit/:id',
    component : EditDepartmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
