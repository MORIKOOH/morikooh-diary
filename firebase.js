// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8W8NbV0rSFXyUJu87cJ8dmjg1L-Xv6_k",
  authDomain: "morikooh-diary.firebaseapp.com",
  projectId: "morikooh-diary",
  storageBucket: "morikooh-diary.appspot.com",
  messagingSenderId: "261885792505",
  appId: "1:261885792505:web:c95b4b094e342a1d279228",
  measurementId: "G-ZNTCVQREPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ブラウザのみで動作させる
if (typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}
