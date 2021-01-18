import firebase from "firebase"


// // const firebaseConfig = {
// //   apiKey: "AIzaSyD-TDsbr_Eyeu_EvEL4-MszJaRRd0IJS7c",
// //   authDomain: "clone-c6663.firebaseapp.com",
// //   projectId: "clone-c6663",
// //   storageBucket: "clone-c6663.appspot.com",
// //   messagingSenderId: "47785348972",
// //   appId: "1:47785348972:web:13a5b1c7bc15890a2fed49",
// //   measurementId: "G-TJQ7FJ1BGL"
// // };
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-TDsbr_Eyeu_EvEL4-MszJaRRd0IJS7c",
  authDomain: "clone-c6663.firebaseapp.com",
  projectId: "clone-c6663",
  storageBucket: "clone-c6663.appspot.com",
  messagingSenderId: "47785348972",
  appId: "1:47785348972:web:13d494c1052c1ce62fed49",
  measurementId: "G-X2WL7FGQB5"
};
const firebaseAapp=firebase.initializeApp(firebaseConfig)
const db=firebaseAapp.firestore()
const auth = firebase.auth()
export {db,auth}

// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
//   authDomain: "challenge-4b2b2.firebaseapp.com",
//   databaseURL: "https://challenge-4b2b2.firebaseio.com",
//   projectId: "challenge-4b2b2",
//   storageBucket: "challenge-4b2b2.appspot.com",
//   messagingSenderId: "962418448875",
//   appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };