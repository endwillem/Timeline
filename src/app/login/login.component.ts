import { Component } from '@angular/core';
import {
  loginEmailPassword,
  loginEmailLink,
  createAccount,
  logout,
} from '../../auth/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  login: any = () => {
    loginEmailPassword();
  };
  signUp: any = () => {
    createAccount();
  };
  loginWithEmailLink: any = () => {
    loginEmailLink();
  };
}
