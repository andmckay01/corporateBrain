const { dotenv } = require("dotenv").config();
const fs = require("fs");

const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const credentials = JSON.parse(fs.readFileSync(credentialsPath));

const firestore_type = credentials.type;
const firestore_project_id = credentials.project_id;
const firestore_private_key_id = credentials.private_key_id;
const firestore_private_key = credentials.private_key;
const firestore_client_email = credentials.client_email;
const firestore_client_id = credentials.client_id;
const firestore_auth_uri = credentials.auth_uri;
const firestore_token_uri = credentials.token_uri;
const firestore_auth_provider = credentials.auth_provider_x509_cert_url;
const firestore_client_url = credentials.client_x509_cert_url;

module.exports = {
  firestore_type: firestore_type,
  firestore_project_id: firestore_project_id,
  firestore_private_key_id: firestore_private_key_id,
  firestore_private_key: firestore_private_key,
  firestore_client_email: firestore_client_email,
  firestore_client_id: firestore_client_id,
  firestore_auth_uri: firestore_auth_uri,
  firestore_token_uri: firestore_token_uri,
  firestore_auth_provider: firestore_auth_provider,
  firestore_client_url: firestore_client_url,
};
