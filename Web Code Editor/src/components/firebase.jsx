
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTX-IqF70TKNKPG1PYqAlQFp8cyx1JPuE",
  authDomain: "webbbb-5772b.firebaseapp.com",
  projectId: "webbbb-5772b",
  storageBucket: "webbbb-5772b.firebasestorage.app",
  messagingSenderId: "246288572782",
  appId: "1:246288572782:web:e1267f493f8e88bfaf617f",
  measurementId: "G-BW1BC05614"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth();

export {app,auth};