import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})

export class RegistroComponent {

  public user: User = {
    nome: null,
    email:  null,
    password: null
  };

  constructor(private userService: UserService, private router: Router) {}

  registrar(): void {
    console.log(this.user)
    this.userService.create(this.user).subscribe(() => {
      console.log('Usuário criado com sucesso!');
    });
     this.router.navigate(['/entrada/login']);
  };


}
