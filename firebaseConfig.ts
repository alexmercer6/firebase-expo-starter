// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// // import { getAnalytics } from 'firebase/analytics';
// import { getFirestore, initializeFirestore } from 'firebase/firestore';
// import {
//   getAuth,
//   initializeAuth,
//   getReactNativePersistence,
// } from 'firebase/auth';
// import ReactNativeAsynctorage from '@react-native-async-storage/async-storage';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.EXPO_PUBLIC_FIREBASE_APIKEY,
//   authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECTID,
//   storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsynctorage),
// });
// // export const analytics = getAnalytics(app);
// export const firestore = initializeFirestore(app, {
//   localCache: { kind: 'persistent' },
// });
// export const auth = getAuth(app);
