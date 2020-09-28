import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { Employee } from './employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  SERVER_URL: string = "api/employees";
  constructor(private httpClient: HttpClient) { }


  getEmployee(id: number): Observable<any> {
    return this.httpClient.get(`${this.SERVER_URL}/${id}`);
  }
  public getEmployees(){
       return this.httpClient.get<Employee[]>(this.SERVER_URL);      
  }

  public addEmployee(employee: Employee):Observable<Employee>{
       return this.httpClient.post<Employee>(this.SERVER_URL, employee);
   }

  public deleteEmployee(id):Observable<Employee>{
      return this.httpClient.delete<Employee>(`${this.SERVER_URL}/${id}`)
  }
  updateEmployee(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.SERVER_URL}/${id}`, value);
  }
}