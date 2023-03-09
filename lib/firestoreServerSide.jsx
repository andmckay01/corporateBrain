const { Firestore } = require("@google-cloud/firestore");
const envVariables1 = require("../env.jsx");

const firestore = new Firestore({
  projectId: "corporatebrain",
  credentials: {
    client_email: envVariables1.firestore_client_email,
    private_key: envVariables1.firestore_private_key,
  },
});

const docRef = firestore.collection("users").doc("test-user-2");

const data = {
  name: "test user 2",
  email: "testemail2@gmail.com",
};

docRef
  .set(data)
  .then(() => {
    console.log(data);
    console.log("document written successfully");
  })
  .catch((error) => {
    console.error("error writing document:", error);
  });
