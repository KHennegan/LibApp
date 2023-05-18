import {getApps, initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD2-2sHqSzm5Ko067e5whFICvpIjXBg3-Y",
  authDomain: "libapp-9b455.firebaseapp.com",
  projectId: "libapp-9b455",
  storageBucket: "libapp-9b455.appspot.com",
  messagingSenderId: "663194231036",
  appId: "1:663194231036:web:fb460b101f8b00e84b7779"
};


function createFirebaseApp() {
    try {
        return getApp();
    } catch {
        return initializeApp(firebaseConfig);
    }
}
 /*
let app;
if (getApps().length < 1) {
    initializeApp(firebaseConfig);
} else {
    app = firebase.app()
} */

const app = createFirebaseApp(firebaseConfig);
const auth = getAuth(app);

export { auth };