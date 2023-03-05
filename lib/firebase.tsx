const { Firestore } = require("@google-cloud/firestore");
const envVariables = require("../env.tsx");

const firestore = new Firestore({
  projectId: "corporatebrain",
  credentials: {
    client_email: envVariables.firestore_client_email,
    private_key: envVariables.firestore_private_key,
  },
});

const docRef = firestore.collection("users").doc("test-user");

const data = {
  name: "test user",
  email: "testemail@gmail.com",
};

docRef
  .set(data)
  .then(() => {
    console.log(data);
    console.log("document written successfully");
  })
  // @ts-ignore
  .catch((error) => {
    console.error("error writing document:", error);
  });
