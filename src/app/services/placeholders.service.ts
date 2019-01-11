import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo, IUser } from '../models';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaceholdersService {

  constructor(
    private http: HttpClient
  ) { }

  getTodos() {
    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos').pipe(delay(1000));
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users').pipe(delay(1000));
  }
}
