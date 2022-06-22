import { Employee } from 'src/app/employee';
import { UpdateComponent } from './components/pages/employees/update/update.component';
// import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // Ajouter URL de BD
  private baseUrl = "http://desktop-gl1v7ag:9007/pepsi";
  constructor(private httpClient : HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    // return this.httpClient.get<Employee[]>(`${this.baseUrl}`) ;
    return this.httpClient.get<Employee[]>(this.baseUrl+'/allActive') ;
  }

  addEmployee(employee : Employee): Observable<Object>{
    // return this.httpClient.post(`${this.baseUrl}`, employee);
    return this.httpClient.post(this.baseUrl+'/ajouter', employee);
  }

  // updateEmployee(employee : Employee)  : Observable<Employee>{
  //   return this.httpClient.put<Employee>(`http://desktop-gl1v7ag:9007/pepsi/update` , employee);
  // }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseUrl+'/FindById/'+id)
  }

  deleteEmployeeById(id: number, employee : Employee): Observable<Object>{
    return this.httpClient.put(this.baseUrl+'/delete/'+id, employee)
  }

  UpdateEmployee(id : number, employee : Employee) : Observable<Object> {
    return this.httpClient.put(this.baseUrl+'/update/'+id, employee);
  }

}
