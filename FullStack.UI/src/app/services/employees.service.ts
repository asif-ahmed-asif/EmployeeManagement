import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseApiUrl : string = environment.baseApiUrl;

  constructor(private http : HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + 'api/employee');
  }
}
