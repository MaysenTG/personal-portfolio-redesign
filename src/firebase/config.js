// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBljCccCjwzXnaW7HcULhnATiQbx_3kOZ0",
  authDomain: "personal-project-projects.firebaseapp.com",
  projectId: "personal-project-projects",
  storageBucket: "personal-project-projects.appspot.com",
  messagingSenderId: "219010489669",
  appId: "1:219010489669:web:affe1bb91257d7d9ecb22c"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage()
const projectFirestore = getFirestore();

export { projectStorage, projectFirestore };