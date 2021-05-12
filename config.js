import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAnhGs0Nfcw6DXDn1bofggTkRMPONgPAaA",
    authDomain: "news-letter-bee9b.firebaseapp.com",
    databaseURL: "https://news-letter-bee9b.firebaseio.com",
    projectId: "news-letter-bee9b",
    storageBucket: "news-letter-bee9b.appspot.com",
    messagingSenderId: "934199019729",
    appId: "1:934199019729:web:cd8ece4b9cb12d7f77ddf0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();