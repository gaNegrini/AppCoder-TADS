import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, newUser, userEmail } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  create(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/register', user);
  };

  read(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/users');
  };

  update(newuser: newUser): Observable<newUser> {
    return this.http.put<newUser>('http://localhost:8080/update', newuser);
  };

  delete(user: userEmail): Observable<userEmail> {
    return this.http.delete<userEmail>('http://localhost:8080/remove/' + user.email);
  };

};
