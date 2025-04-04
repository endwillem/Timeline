import { AuthErrorCodes, User } from 'firebase/auth';

export const txtEmail = document.getElementById('txtEmail') as HTMLInputElement;
export const txtPassword = document.getElementById(
  'txtPassword'
) as HTMLInputElement;

export const divAuthState = document.getElementById('divAuthState')!;
export const lblAuthState = document.getElementById('lblAuthState')!;

export const userForm = document.getElementById('userForm')!;
export const divLoginError = document.getElementById('divLoginError')!;
export const lblLoginErrorMessage = document.getElementById(
  'lblLoginErrorMessage'
)!;

// export const showUser = () => {
//   userForm.style.display =
//     userForm.style.display !== 'block' ? 'block' : 'none';
// };

// export const hideLoginError = () => {
//   divLoginError.style.display = 'none';
//   lblLoginErrorMessage.innerHTML = '';
// };

// export const showLoginError = (error: any) => {
//   divLoginError.style.display = 'block';
//   if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
//     lblLoginErrorMessage.innerHTML = `Wrong password. Try again.`;
//   } else {
//     lblLoginErrorMessage.innerHTML = `Error: ${error.message}`;
//   }
// };

// export const showLoginState = (user: User) => {
//   lblAuthState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `;
// };

// hideLoginError();
