// const env = require('../env.jsx');
// const { initializeApp } = require('firebase/app');
// const { getFirestore, collection, doc, getDoc, setDoc, serverTimestamp } = require('firebase/firestore');
// const { v4: uuidv4 } = require('uuid');

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

// const { getAnalytics } = require('firebase/analytics');
// const analytics = getAnalytics(app); #not using right now but may in the future

const firebaseConfig = {
  apiKey: `${process.env.firebase_api_key}`,
  authDomain: "corporatebrain.firebaseapp.com",
  projectId: "corporatebrain",
  storageBucket: "corporatebrain.appspot.com",
  messagingSenderId: "168026924628",
  appId: "1:168026924628:web:aa6a933972172c8f93efc1",
  measurementId: "G-KQ4HW2KNFX"
};

// Initialize Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function submit(submission) {
    try {
      let id;
      let newDoc;
      let data = {
        created: serverTimestamp(),
        ipAddress: "192.158.1.38", //need to use req.ip in a request (req, res) on the server side to get the client ip address
        submissionText: `${submission}`, //pass this in
        responseText: null
      };
  
      do {
        id = uuidv4();
        newDoc = doc(collection(db, "subres"), id);
      } while ((await getDoc(newDoc)).exists());
  
      await setDoc(newDoc, data);
      console.log("Document written with ID: ", id);
      return data;
    } catch (e) {
      console.error("Error writing document: ", e);
      throw e;
    }
  }

module.exports = { submit }

// async function response() {

// }

/*
TO DO:
1. Function to take a parameter (form submission) and write to the database (will be used by our middleware)
2. Function to take the response from openai and write to our database (again, used by middleware)
3. Write database rules that ensure step 1 and 2 are only able to read or write, never overwrite
  - can read or write anything
*/


