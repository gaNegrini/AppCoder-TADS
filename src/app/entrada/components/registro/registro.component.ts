import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  public inputNames = [
    { title: 'Nome', type: ''},
    { title: 'Email', type: 'email'},
    { title: 'Senha', type: 'password'},
    { title: 'Confirmar senha', type: 'password'},
  ];



  constructor() { }
}
