import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:5020/api/TeamSync';
  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<any> {
    debugger
    return this.http.get(`${this.apiUrl}/GetAllEmployee`);
  }

  createEmployee(employeeData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': ' application/json-patch+json' });
    return this.http.post<any>(`${this.apiUrl}/CreateEmployee`, employeeData, { headers: headers })
  }
}
