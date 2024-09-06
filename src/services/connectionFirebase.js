import * as firebase from "firebase";

let firebaseConfig = {
  
};

// Initialize Firebase
let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
