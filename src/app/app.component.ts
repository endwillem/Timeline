import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// elsewhere
// import {
//   btnLogin,
//   btnSignupWithEmailLink,
//   btnSignup,
//   btnLogout,
//   btnUser,
//   showUser,
// } from '../ui';

// elsewhere
// import {
//   loginEmailPassword,
//   loginEmailLink,
//   createAccount,
//   monitorAuthState,
//   logout,
// } from '../auth/auth';

// elsewhere
// import { getData } from '../database';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngtimeline';
}

// elsewhere
// btnLogin.addEventListener('click', loginEmailPassword);
// btnSignupWithEmailLink.addEventListener('click', loginEmailLink);
// btnSignup.addEventListener('click', createAccount);
// btnLogout.addEventListener('click', logout);
// btnUser.addEventListener('click', showUser);

// elsewhere?
// monitorAuthState();

// elsewhere?
// getData();
