import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerResponse } from '../CustomerResponse';
import { CustomerRequest } from '../CustomerRequest';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:9090/api/v1/customer';

  constructor(private http: HttpClient) {}

  postData(customer: CustomerRequest): Observable<CustomerResponse> {
    console.log('FROM SERVICE: ' + customer);
    return this.http.post<CustomerResponse>(this.apiUrl, customer, httpOptions);
  }
}
