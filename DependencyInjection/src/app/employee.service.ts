import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IEmployees} from './employee';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {

  private _url = '/assets/data/employees.json';
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployees[]> {
    return this.http.get<IEmployees[]>(this._url)
                .catch(this.errorHandler);
  }

  errorHandler (error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server error');
  }
  }
