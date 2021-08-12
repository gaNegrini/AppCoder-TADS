import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public inputNames = [
    { title: 'Usuário', type: ''},
    { title: 'Senha', type: 'password'},
  ];

  constructor() { }

}
