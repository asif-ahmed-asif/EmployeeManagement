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
}
