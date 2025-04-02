import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
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

const firebaseConfig = {
  apiKey: 'AIzaSyDLOD6YRW-Qq3yIcTEmSl5smiKegl4-aB0',
  authDomain: 'timeline-cae8e.firebaseapp.com',
  databaseURL:
    'https://timeline-cae8e-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'timeline-cae8e',
  storageBucket: 'timeline-cae8e.firebasestorage.app',
  messagingSenderId: '129647486779',
  appId: '1:129647486779:web:7a2ea7752f4435fe6d791e',
  measurementId: 'G-2CEHWVEXHD',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
