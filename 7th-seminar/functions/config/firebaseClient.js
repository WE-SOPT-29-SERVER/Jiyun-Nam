const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyDwtueZ1-G8WOrhRtP0KvR4WHMad7U6bCw",
  authDomain: "wesopt29-8f39a.firebaseapp.com",
  projectId: "wesopt29-8f39a",
  storageBucket: "wesopt29-8f39a.appspot.com",
  messagingSenderId: "69782450542",
  appId: "1:69782450542:web:53d336c554b754a695d17f",
  measurementId: "G-PWW8PN65YF"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };