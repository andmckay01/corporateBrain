const env = require('../env.jsx');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, getDoc, setDoc, serverTimestamp, getDocs } = require('firebase/firestore');
const { v4: uuidv4 } = require('uuid');

// const { getAnalytics } = require('firebase/analytics');
// const analytics = getAnalytics(app); #not using right now but may in the future

const firebaseConfig = {
  apiKey: `${env.firebase_api_key}`,
  authDomain: "corporatebrain.firebaseapp.com",
  projectId: "corporatebrain",
  storageBucket: "corporatebrain.appspot.com",
  messagingSenderId: "168026924628",
  appId: "1:168026924628:web:aa6a933972172c8f93efc1",
  measurementId: "G-KQ4HW2KNFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const docRef = doc(db, "users", "test-user-1");
// const colRef = collection(db, "users");

data = {
    created: 'March 9, 2023 at 10:53:59 AM UTC-7',
    ipAddress: "192.158.1.38",
    responseText: "cookies are great",
    submissionText: "tell me about cookies"
}

async function submit() {
    const id = uuidv4();
    const newDoc = doc(collection(db, "new"))

    await setDoc(newDoc, data)
    return 'hello'

    //generate uuid
    //check if already exists and regenerate if it does
    //create a document in our collection with the necessary data
    //make sure to include error-handling and log these errors

}

submit()

/*
collection schema
1. subres (submission and response) -- id
  - created: datetime
  - ipAddress: string
  - submissionText: string
  - responseText: string
*/

/*
TO DO:
1. Function to take a parameter (form submission) and write to the database (will be used by our middleware)
2. Function to take the response from openai and write to our database
3. Write database rules that ensure step 1 and 2 are only able to read or write, never overwrite

*/


