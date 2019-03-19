import firebase from 'firebase/app';
import 'firebase/storage';

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyAeNFed6W3tvYYnaQrPaElKMBCr-Bj0EX8",
  authDomain: "saylani-final-year-project.firebaseapp.com",
  databaseURL: "https://saylani-final-year-project.firebaseio.com",
  projectId: "saylani-final-year-project",
  storageBucket: "saylani-final-year-project.appspot.com",
  messagingSenderId: "219031403641"
};
firebase.initializeApp(config);


  const storage=firebase.storage();

export {
    storage, firebase as default
}