import {
  // hideLoginError,
  // showLoginState,
  lblAuthState,
  txtEmail,
  txtPassword,
} from '../ui';

import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  getAdditionalUserInfo,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from 'firebase/auth';

import { auth } from '../firebase/firebase';

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

const loginEmailLink = async () => {
  const email = txtEmail.value;
  console.log(
    window.location.href.substr(0, window.location.href.lastIndexOf('/'))
  );
  const ActionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: window.location.href.substr(0, window.location.href.lastIndexOf('/')),
    // This must be true.
    handleCodeInApp: true,
    // iOS: {
    //   bundleId: "com.example.ios",
    // },
    // android: {
    //   packageName: "com.example.android",
    //   installApp: true,
    //   minimumVersion: "12",
    // },
    // The domain must be configured in Firebase Hosting and owned by the project.
    linkDomain: 'custom-domain.com',
  };

  sendSignInLinkToEmail(auth, email, ActionCodeSettings)
    .then((result: any) => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', email);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('fout: ', errorCode, errorMessage);
      // ...
    });
};

// Create new account using email/password
const createAccount = async () => {
  const email = txtEmail.value;
  const password = txtPassword.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log('success!!', user);
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
      // showApp();
      // showLoginState(user);

      // hideLoginError();
      // hideLinkError();
    } else {
      // showLoginForm();
      console.log('Youre not logged in');

      lblAuthState.innerHTML = `You're not logged in.`;
    }
  });
};

const getUser = async () => {
  console.log('getting');
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      return 5;
    } else {
      return 2;
    }
  });
};

// Log out
const logout = async () => {
  await signOut(auth);
};

if (isSignInWithEmailLink(auth, window.location.href)) {
  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  let email = window.localStorage.getItem('emailForSignIn')!;
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation')!;
  }

  // The client SDK will parse the code from the link for you.
  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn');
      console.log('logged in');
      const user = getAdditionalUserInfo(result)?.profile;
      console.log('success!!', user);

      // You can access the new user by importing getAdditionalUserInfo
      // and calling it with result:
      // getAdditionalUserInfo(result)
      // You can access the user's profile via:
      // getAdditionalUserInfo(result)?.profile
      // You can check if the user is new or existing:
      // getAdditionalUserInfo(result)?.isNewUser
    })
    .catch((error) => {
      console.log('not logged in');
      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
    });
}

export {
  loginEmailPassword,
  loginEmailLink,
  createAccount,
  monitorAuthState,
  logout,
  getUser,
};
