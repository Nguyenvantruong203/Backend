const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAI1WRAWKZcZ-tonqyZLwaJmS0f5Op7WZ0",
  authDomain: "gch1107-acc7f.firebaseapp.com",
  projectId: "gch1107-acc7f",
  storageBucket: "gch1107-acc7f.appspot.com",
  messagingSenderId: "617787248807",
  appId: "1:617787248807:web:85c1c5b9c60b9e037bcb82",
  measurementId: "G-8JVD8HZ2LX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;
