import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDCFNJImCq3drUVGUSxBzSKb_NAG8k59qI",
  authDomain: "react-auth-68f68.firebaseapp.com",
  databaseURL: "https://react-auth-68f68.firebaseio.com",
  projectId: "react-auth-68f68",
  storageBucket: "react-auth-68f68.appspot.com",
  messagingSenderId: "233683284354",
  appId: "1:233683284354:web:d715b2821857481ad99f9b",
  measurementId: "G-P4FP9N98FD"
};
// Initialize Firebase
const fireAuth = firebase.initializeApp(firebaseConfig);

export default fireAuth