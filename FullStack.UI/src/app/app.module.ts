import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { SearchComponent } from './components/search/search.component';
import { DepartmentsListComponent } from './components/department/departments-list/departments-list.component';
import { AddDepartmentsComponent } from './components/department/add-departments/add-departments.component';
import { EditDepartmentsComponent } from './components/department/edit-departments/edit-departments.component';
import { NgConfirmModule } from 'ng-confirm-box';
import { NgToastModule } from 'ng-angular-popup';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { ManagerComponent } from './components/dashboard/manager/manager.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    SearchComponent,
    DepartmentsListComponent,
    AddDepartmentsComponent,
    EditDepartmentsComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    ManagerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgConfirmModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
