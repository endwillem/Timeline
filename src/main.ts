//import User from "./user";
import {
  btnLogin,
  btnSignupWithEmailLink,
  btnSignup,
  btnLogout,
  btnUser,
  showUser,
} from './ui';
import {
  loginEmailPassword,
  loginEmailLink,
  createAccount,
  monitorAuthState,
  logout,
} from './auth/auth';

//import { getAuth } from "firebase/auth";

import { getData } from './database';

btnLogin.addEventListener('click', loginEmailPassword);
btnSignupWithEmailLink.addEventListener('click', loginEmailLink);
btnSignup.addEventListener('click', createAccount);
btnLogout.addEventListener('click', logout);
btnUser.addEventListener('click', showUser);

monitorAuthState();

// const user = new User("Willem", 38);
// console.log(user);

getData();

//ToDo: dom manipulation function here
