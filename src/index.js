import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import * as firebase from "firebase/app";   

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAABAeStufZYutM0nlMCm1Wdil1KWZzT4",
  authDomain: "dawgs-e-cycling.firebaseapp.com",
  databaseURL: "https://dawgs-e-cycling-default-rtdb.firebaseio.com",
  projectId: "dawgs-e-cycling",
  storageBucket: "dawgs-e-cycling.appspot.com",
  messagingSenderId: "747153084860",
  appId: "1:747153084860:web:cf8d047db7260bd6769bb9",
  measurementId: "G-4KBTHF3EN4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));