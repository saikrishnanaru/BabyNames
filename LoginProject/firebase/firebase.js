
import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyBzdqF7uM0je9wJEz2dcwAcB4JfE1JuPN4",
            authDomain: "login-a663d.firebaseapp.com",
            databaseURL: "https://login-a663d.firebaseio.com",
            storageBucket: "login-a663d.appspot.com"
        });
    }

}

module.exports = Firebase;
