import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Aprender', url: '/folder/Aprender', icon: 'book' },
    { title: 'Perfil', url: '/folder/Perfil', icon: 'person' },
    { title: 'Sobre', url: '/folder/Sobre', icon: 'alert-circle' },
    { title: 'Desconectar', url: 'entrada/login', icon: 'close' },
  ];

  constructor() {}
}
