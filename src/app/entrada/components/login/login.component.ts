import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public inputNames = [
    { title: 'Nome', type: 'text'},
    { title: 'Senha', type: 'password'},
  ];

  constructor() { }

}
