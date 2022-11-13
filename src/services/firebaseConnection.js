import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyC-aBBGzinoPfAHmMTecMs42Zuyw7ZcZYI",
  authDomain: "devlinks-87de4.firebaseapp.com",
  projectId: "devlinks-87de4",
  storageBucket: "devlinks-87de4.appspot.com",
  messagingSenderId: "945661907017",
  appId: "1:945661907017:web:99bb623b58d4e0013b2f98",
  measurementId: "G-QZS16L75C8"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export {db, auth}