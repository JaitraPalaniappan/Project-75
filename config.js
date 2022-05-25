import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDWjxo5q-A6vrSb0Dk1Sw8Akm_oW1FPSEA",
  authDomain: "e-ride-stage-4-b296d.firebaseapp.com",
  projectId: "e-ride-stage-4-b296d",
  storageBucket: "e-ride-stage-4-b296d.appspot.com",
  messagingSenderId: "315944940931",
  appId: "1:315944940931:web:f310422a2a1fe61a5872b6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
