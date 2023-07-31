import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Department } from '../model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl = environment.baseApiUrl;

  constructor(private http : HttpClient) { }

  getAllDepartments() : Observable<Department[]>{
    return this.http.get<Department[]>(this.baseUrl + 'api/department');
  }

  addDepartment(department : Department) : Observable<any>{
    return this.http.post<any>(this.baseUrl + 'api/department', department);
  }

  getDepartment(id : string) : Observable<any>{
    return this.http.get<any>(this.baseUrl + 'api/department/' + id);
  }

  editDepartment(department : Department) : Observable<any>{
    return this.http.put<any>(this.baseUrl + 'api/department', department);
  }

  changeDepartmentStatus(id : number) : Observable<any>{
    return this.http.delete<any>(this.baseUrl + 'api/department/' + id);
  }

  searchEmployee(key : string) : Observable<Department[]>{
    return this.http.get<Department[]>(this.baseUrl + 'api/department/search/'+ key);
  }
}
