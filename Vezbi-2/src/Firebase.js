import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAve2lzF-p6gprTi9TCN79kJWfCIDeMYaE",
  authDomain: "auth-bbc9e.firebaseapp.com",
  projectId: "auth-bbc9e",
  storageBucket: "auth-bbc9e.appspot.com",
  messagingSenderId: "795250943492",
  appId: "1:795250943492:web:ba4748a842d54fe8acb751",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(result => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch(error => {
      console.log(error);
    });
};
