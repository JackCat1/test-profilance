import Rebase from 're-base';
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA1ABdsnELaUA_u71qmOK2rYg3guJlbScI",
    authDomain: "test-profilance.firebaseapp.com",
    databaseURL: "https://test-profilance.firebaseio.com",
    projectId: "test-profilance",
    storageBucket: "test-profilance.appspot.com",
    messagingSenderId: "35034741534",
    appId: "1:35034741534:web:26d5ab4d575582e0c8a70f"
}
const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
export {base}