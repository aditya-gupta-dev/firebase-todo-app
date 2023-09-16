import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACdTukbllVK8srusflpscaffWng3jvGg0",
    authDomain: "daring-phoenix-397715.firebaseapp.com",
    projectId: "daring-phoenix-397715",
    storageBucket: "daring-phoenix-397715.appspot.com",
    messagingSenderId: "980240483567",
    appId: "1:980240483567:web:0b0ecfcf0422072c6a071a",
    measurementId: "G-8JLBF83JX4"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);
