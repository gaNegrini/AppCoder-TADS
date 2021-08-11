import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.page.html',
  styleUrls: ['./login-register.page.scss'],
})
export class LoginRegisterPage implements OnInit {
public LoginRegister = [
  { title: 'Login', url: 'login/Login' },
  { title: 'Register', url: 'login/Register'}
];

  ngOnInit() {
  }

}
