import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDkIyLvI4sNmZKm227djMHBMDqKVZ7RQuI",
    authDomain: "login-app-85261.firebaseapp.com",
    databaseURL: "https://login-app-85261.firebaseio.com",
    projectId: "login-app-85261",
    appId: "1:267875740811:web:1655fb669f08686b22788e",
};

export default firebase.initializeApp(firebaseConfig);

