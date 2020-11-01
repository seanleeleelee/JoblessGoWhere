import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDkGHDPQIUgESRV5tfKHwY8oWq7L1D51Ug",
  authDomain: "joblessgowhere.firebaseapp.com",
  databaseURL: "https://joblessgowhere.firebaseio.com",
  projectId: "joblessgowhere",
  storageBucket: "joblessgowhere.appspot.com",
  messagingSenderId: "514151602941",
  appId: "1:514151602941:web:4f26557f4da744ad277c94",
  measurementId: "G-QX2V986RS9"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;
