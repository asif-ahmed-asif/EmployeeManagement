import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseUrl = environment.baseApiUrl;

  constructor(private http : HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl + 'api/employee');
  }

  addEmployee(addEmployeeRequest : Employee) : Observable<Employee>{
    addEmployeeRequest.id = "00000000-0000-0000-0000-000000000000";
    return this.http.post<Employee>(this.baseUrl + 'api/employee', addEmployeeRequest);
  }

  getEmployee(id : string) : Observable<Employee>{
    return this.http.get<Employee>(this.baseUrl + 'api/employee/'+ id);
  }

  editEmployee(employeeDetails : Employee) : Observable<Employee>{
    return this.http.put<Employee>(this.baseUrl + 'api/employee', employeeDetails);
  }
}
