// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvSZGq5oribkOTMCwsGAzQlCfBb9ZgkWc",
  authDomain: "netflixai-ba846.firebaseapp.com",
  projectId: "netflixai-ba846",
  storageBucket: "netflixai-ba846.appspot.com",
  messagingSenderId: "657523723190",
  appId: "1:657523723190:web:f9489ed2a1f3e8d3918f17",
  measurementId: "G-7QMJPBS4VR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
