// Firebase Web SDK setup for the plain HTML + JavaScript project.
// Replace each placeholder with your real values from the Firebase Console:
// 1) Go to Project settings > Your apps > Web app > Firebase SDK snippet
// 2) Copy the values below into the object below.
// 3) Keep this file in the same folder as index.html and app.js.

(function () {
  window.darbakFirebase = null;

const firebaseConfig = {
  apiKey: "AIzaSyCMFHvwL8wj0kfI0o7LGWseMQweIMSM5sM",
  authDomain: "darbak-jordan.firebaseapp.com",
  projectId: "darbak-jordan",
  storageBucket: "darbak-jordan.firebasestorage.app",
  messagingSenderId: "267569055194",
  appId: "1:267569055194:web:919ce3adda7171e7ba6ce3",
  measurementId: "G-DRY03HZCE0"
};

  if (!window.firebase) {
    console.warn('Firebase SDK is not loaded. Add the Firebase scripts before app.js in index.html, then paste your Firebase config into firebase-config.js.');
    return;
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  window.darbakFirebase = {
    auth: firebase.auth(),
    db: firebase.firestore(),
    storage: firebase.storage(),
    config: firebaseConfig
  };

  window.__darbakFirebaseReady = true;
})();
