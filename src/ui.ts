import { AuthErrorCodes, User } from "firebase/auth";

export const login = document.getElementById("login")!;
export const app = document.getElementById("app")!;

export const txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
export const txtPassword = document.getElementById(
  "txtPassword"
) as HTMLInputElement;

export const btnLogin = document.getElementById("btnLogin")!;
export const btnSignupWithEmailLink = document.getElementById(
  "btnSignupWithEmailLink"
)!;
export const btnSignup = document.getElementById("btnSignup")!;
export const btnLogout = document.getElementById("btnLogout")!;
export const btnUser = document.getElementById("btnUser")!;

export const divAuthState = document.getElementById("divAuthState")!;
export const lblAuthState = document.getElementById("lblAuthState")!;

export const userForm = document.getElementById("userForm")!;
export const divLoginError = document.getElementById("divLoginError")!;
export const lblLoginErrorMessage = document.getElementById(
  "lblLoginErrorMessage"
)!;

export const showLoginForm = () => {
  login.style.display = "block";
  app.style.display = "none";
};

export const showUser = () => {
  userForm.style.display =
    userForm.style.display !== "block" ? "block" : "none";
};

export const showApp = () => {
  login.style.display = "none";
  app.style.display = "block";
};

export const hideLoginError = () => {
  divLoginError.style.display = "none";
  lblLoginErrorMessage.innerHTML = "";
};

export const showLoginError = (error: any) => {
  divLoginError.style.display = "block";
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    lblLoginErrorMessage.innerHTML = `Wrong password. Try again.`;
  } else {
    lblLoginErrorMessage.innerHTML = `Error: ${error.message}`;
  }
};

export const showLoginState = (user: User) => {
  lblAuthState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `;
};

hideLoginError();
