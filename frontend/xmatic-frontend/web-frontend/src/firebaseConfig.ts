// import { initializeApp } from 'firebase/'';
// import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyApainhKBS9Zc1kGRe_YZWy1jy2AspnhZQ",
  authDomain: "xmatic-data.firebaseapp.com",
  projectId: "xmatic-data",
  storageBucket: "xmatic-data.appspot.com",
  messagingSenderId: "925701913891",
  appId: "1:925701913891:web:687c5a6f2814241cb5a096",
  measurementId: "G-TYBP9NE9Q0"
};

firebase.initializeApp(firebaseConfig)
export const dataref = firebase.database()
export const storage= firebase.storage()
export default firebase
 
// const storage = getStorage(app);

// export { storage, ref, getDownloadURL };



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyApainhKBS9Zc1kGRe_YZWy1jy2AspnhZQ",
//   authDomain: "xmatic-data.firebaseapp.com",
//   projectId: "xmatic-data",
//   storageBucket: "xmatic-data.appspot.com",
//   messagingSenderId: "925701913891",
//   appId: "1:925701913891:web:687c5a6f2814241cb5a096",
//   measurementId: "G-TYBP9NE9Q0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);