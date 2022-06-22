import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // Ajouter URL de BD
  private baseUrl = "";
  constructor(private httpClient : HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    // return this.httpClient.get<Employee[]>(`${this.baseUrl}`) ;
    return this.httpClient.get<Employee[]>(`http://desktop-gl1v7ag:9007/pepsi/all`) ;
  }

  addEmployee(employee : Employee): Observable<Employee>{
    // return this.httpClient.post(`${this.baseUrl}`, employee);
    return this.httpClient.post(`http://desktop-gl1v7ag:9007/pepsi/ajouter`, employee);
  }


}
