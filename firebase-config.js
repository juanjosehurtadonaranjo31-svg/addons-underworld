const firebaseConfig = {

  apiKey: "AIzaSyAnXQeL6jsD3iOqmmOw_V4pyP8GhvxJqPM",

  authDomain: "addons-underworld.firebaseapp.com",

  projectId: "addons-underworld",

  storageBucket: "addons-underworld.firebasestorage.app",

  messagingSenderId: "983540275279",

  appId: "1:983540275279:web:1c773fa34ff8179d3df23a"

};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

const storage = firebase.storage();
