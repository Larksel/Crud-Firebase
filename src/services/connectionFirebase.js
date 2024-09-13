import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyDm0CzRQRoG4yTW4iApLpHn-sNT4EMVxIo",
  authDomain: "bdcrudfirestore-12213.firebaseapp.com",
  projectId: "bdcrudfirestore-12213",
  storageBucket: "bdcrudfirestore-12213.appspot.com",
  messagingSenderId: "822016841411",
  appId: "1:822016841411:web:7c3c11b9186f2e11a77476"
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
