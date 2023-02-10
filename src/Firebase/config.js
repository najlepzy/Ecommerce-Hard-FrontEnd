import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBMbLRfQBT8nHrJamGRo-gz1YSGaw8Hn9Y",
    authDomain: "hard-reactjs-lautaro-aguirre.firebaseapp.com",
    projectId: "hard-reactjs-lautaro-aguirre",
    storageBucket: "hard-reactjs-lautaro-aguirre.appspot.com",
    messagingSenderId: "28185299605",
    appId: "1:28185299605:web:3766a02c0120f99668299c",
    measurementId: "G-7RRS8RC3VQ"
};

export const app = initializeApp({ projectId: 'hard-reactjs-lautaro-aguirre' });

export default firebaseConfig