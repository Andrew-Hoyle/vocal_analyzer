import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
    apiKey: "AIzaSyBmVDVHgZem_G4aV1mFtDavaEomYPEvgyU",
    authDomain: "vocal-analysis-1.firebaseapp.com",
    projectId: "vocal-analysis-1",
    storageBucket: "vocal-analysis-1.appspot.com",
    messagingSenderId: "546006361652",
    appId: "1:546006361652:web:1e783c1b621840abe88c61"
  };

const app = initializeApp(firebaseConfig)