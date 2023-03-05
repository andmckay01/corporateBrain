const { dotenv } = require("dotenv").config();
const creds = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);
const { Firestore } = require("@google-cloud/firestore");

const firestore = new Firestore({
  projectId: "corporatebrain",
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  },
});

console.log(firestore);
