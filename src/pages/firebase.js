import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyByRdDebD0NpbjjmJRXPnAcUM1pHRER1XY",
    authDomain: "crud-project-d17ae.firebaseapp.com",
    databaseURL: "https://crud-project-d17ae-default-rtdb.firebaseio.com",
    projectId: "crud-project-d17ae",
    storageBucket: "crud-project-d17ae.appspot.com",
    messagingSenderId: "558382497557",
    appId: "1:558382497557:web:c2cf60e8a41c194bfa331c"
  };
 firebase.initializeApp(firebaseConfig);


  const database = firebase.database();

  const db = firebase.firestore();

  export { database,db };

  export default firebase;