import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCvkGexPQV-DQ7LEd5kV_aOXm1xxqtpZ6c',
  authDomain: 'prepwise-16dc3.firebaseapp.com',
  projectId: 'prepwise-16dc3',
  storageBucket: 'prepwise-16dc3.firebasestorage.app',
  messagingSenderId: '210720613332',
  appId: '1:210720613332:web:15761f3f0206878d7c2c41',
  measurementId: 'G-02DQS4YXG0',
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const db = getFirestore(app);
