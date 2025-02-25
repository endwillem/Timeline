import "./main.scss";
import "./styles.css";
//import User from "./user";
import {
  hideLoginError,
  showLoginState,
  showLoginForm,
  showApp,
  showLoginError,
  lblAuthState,
  btnLogin,
  btnSignup,
  btnLogout,
  txtEmail,
  txtPassword,
} from "./ui";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  connectAuthEmulator,
} from "firebase/auth";

// import { getData } from "./database";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDLOD6YRW-Qq3yIcTEmSl5smiKegl4-aB0",
  authDomain: "timeline-cae8e.firebaseapp.com",
  databaseURL:
    "https://timeline-cae8e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "timeline-cae8e",
  storageBucket: "timeline-cae8e.firebasestorage.app",
  messagingSenderId: "129647486779",
  appId: "1:129647486779:web:7a2ea7752f4435fe6d791e",
  measurementId: "G-2CEHWVEXHD",
});

// Login using email/password
const loginEmailPassword = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  // step 1: try doing this w/o error handling, and then add try/catch
  await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

  // step 2: add error handling
  // try {
  //   await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  // }
  // catch(error) {
  //   console.log(`There was an error: ${error}`)
  //   showLoginError(error)
  // }
};

// Create new account using email/password
const createAccount = async () => {
  const email = txtEmail.value;
  const password = txtPassword.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("success!!", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
};

// Monitor auth state
const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      showApp();
      showLoginState(user);

      hideLoginError();
      //hideLinkError();
    } else {
      showLoginForm();
      lblAuthState.innerHTML = `You're not logged in.`;
    }
  });
};

// Log out
const logout = async () => {
  await signOut(auth);
};

btnLogin.addEventListener("click", loginEmailPassword);
btnSignup.addEventListener("click", createAccount);
btnLogout.addEventListener("click", logout);

const auth = getAuth(firebaseApp);
console.log(auth);

// connectAuthEmulator(auth, "http://localhost:9099");

monitorAuthState();

// const user = new User("Willem", 38);
// console.log(user);

// getData();

//ToDo: dom manipulation function here
