import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCthgEBp_pQBcEk02PGjR-4PviChey9W5U",
  authDomain: "whatsapp-clone-b7c63.firebaseapp.com",
  projectId: "whatsapp-clone-b7c63",
  storageBucket: "whatsapp-clone-b7c63.appspot.com",
  messagingSenderId: "991605344354",
  appId: "1:991605344354:web:5bbc517f63262ee240693b",
  measurementId: "G-S6E2G6NFQN"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider }
export default db