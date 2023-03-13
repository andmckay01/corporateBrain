const { Firestore } = require("@google-cloud/firestore");
const dotenv = require('dotenv');
const { CollectionReference } = require("firebase/firestore");
// const { deleteDoc } = require("firebase/firestore");

dotenv.config() //gets us access to our environment variables

const firestore = new Firestore({
  projectId: "corporatebrain",
  credentials: {
    client_email: "brains@corporatebrain.iam.gserviceaccount.com",
    private_key: process.env.FIREBASE_PRIVATE_KEY.split(String.raw`\n`).join('\n') // newline was not being recognized
  },
});

const collection = firestore.collection('subres');

//this deletes every document in the subres collection
collection.get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            doc.ref.delete();
        })
    })
    .catch(error => {
        console.log(error);
    })

