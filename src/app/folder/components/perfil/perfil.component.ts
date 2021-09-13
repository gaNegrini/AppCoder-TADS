import { Component } from '@angular/core';
import { newUser, User, userEmail } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent{
  
  public newuser: newUser = {
    nome: null,
    email: null,
    password: null,
    newemail: null
  };

  public email: userEmail = {
    email: null
  };

  public users: User[];

  constructor(private userService: UserService) { }

  atualizar(): void {
    this.userService.update(this.newuser).subscribe(() => {
      console.log("Perfil atualizado com sucesso!");
    });
  };

  deletar(): void {
    this.userService.delete(this.email).subscribe(() => {
      console.log(this.email);
      console.log("Conta removida com sucesso!");
    });
  };

  ler(): void {
    this.userService.read().subscribe(users => {
      this.users = users;
      console.log(users);
      console.log('Leitura de usuários completo');
    });
  };

};
