import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBIeV7dbaDh6xIsjdbs6TW-i-BUIRzMLxI",
  authDomain: "fisheries-management-tracking.firebaseapp.com",
  databaseURL: "https://fisheries-management-tracking.firebaseio.com",
  projectId: "fisheries-management-tracking",
  storageBucket: "fisheries-management-tracking.appspot.com",
  messagingSenderId: "445580249596"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
