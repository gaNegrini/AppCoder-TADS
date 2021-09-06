import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  create(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/register', user);
  };

  read(){};

  update(){};

  delete(){};

}
