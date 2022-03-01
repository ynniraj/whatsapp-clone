import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCHbwZ4bAv7M21xLpOgRnm1rmRucLABv1M",
  authDomain: "whatsapp-ee719.firebaseapp.com",
  projectId: "whatsapp-ee719",
  storageBucket: "whatsapp-ee719.appspot.com",
  messagingSenderId: "418659059565",
  appId: "1:418659059565:web:767c6890eb95232d10fc64",
  measurementId: "G-SDCVW0WERP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider }
export default db