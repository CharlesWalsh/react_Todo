import "firebase/firestore"
import firebase from 'firebase'
const DB_CONFIG = {
    apiKey: "AIzaSyBXM_PNIAnl4K6AnoM4NTd5PSgeE6P_nEk",
    authDomain: "net-todolist.firebaseapp.com",
    databaseURL: "https://net-todolist.firebaseio.com",
    projectId: "net-todolist",
    storageBucket: "net-todolist.appspot.com",
    messagingSenderId: "631617655459"
};
const app1=firebase.initializeApp(DB_CONFIG);
const facebookProvider= new firebase.auth.FacebookAuthProvider()
export default facebookProvider

