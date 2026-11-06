/**
 * Firebase Configuration for Sriraksha & Pannaga Wedding Invitation
 * 
 * Instructions:
 * 1. Create a free Firebase project at https://console.firebase.google.com/
 * 2. Add a Web App, and enable Firestore Database (Test Mode or Production).
 * 3. Replace the placeholder values below with your project credentials:
 */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDnXcKDmcSgdHn9-yNcMhGHE05w7hOFZL8",
  authDomain: "sp-wedding-invitation.firebaseapp.com",
  projectId: "sp-wedding-invitation",
  storageBucket: "sp-wedding-invitation.firebasestorage.app",
  messagingSenderId: "117836514991",
  appId: "1:117836514991:web:272dc9e262cef63f2fb65a",
  measurementId: "G-9BR6ERWH32"
};

// Check if credentials have been replaced
window.isFirebaseConfigured = function () {
  return window.FIREBASE_CONFIG &&
    window.FIREBASE_CONFIG.apiKey &&
    window.FIREBASE_CONFIG.apiKey !== "AIzaSyDnXcKDmcSgdHn9-yNcMhGHE05w7hOFZL8" &&
    window.FIREBASE_CONFIG.projectId !== "sp-wedding-invitation";
};

