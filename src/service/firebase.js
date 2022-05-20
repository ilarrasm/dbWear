// Import the functions you need from the SDKs you need

import { initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCE5rYLLhOWSmWUM__i67wiUjUITPVXqBA",

  authDomain: "dbwear-9d924.firebaseapp.com",

  projectId: "dbwear-9d924",

  storageBucket: "dbwear-9d924.appspot.com",

  messagingSenderId: "357489899532",

  appId: "1:357489899532:web:38b9288fd29f9ac0575629"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)