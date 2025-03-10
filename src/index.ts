import "./main.scss";
import "./styles.scss";
//import User from "./user";
import { btnLogin, btnSignup, btnLogout, btnUser, showUser } from "./ui";
import {
  loginEmailPassword,
  createAccount,
  monitorAuthState,
  logout,
} from "./auth/auth";

//import { getAuth } from "firebase/auth";

import { getData } from "./database";

btnLogin.addEventListener("click", loginEmailPassword);
btnSignup.addEventListener("click", createAccount);
btnLogout.addEventListener("click", logout);
btnUser.addEventListener("click", showUser);

monitorAuthState();

// const user = new User("Willem", 38);
// console.log(user);

getData();

//ToDo: dom manipulation function here
