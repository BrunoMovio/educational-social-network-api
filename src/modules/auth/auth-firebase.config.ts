import * as admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_AUTH_KEY);

export const firebaseApp = admin.initializeApp(
  {
    credential: admin.credential.cert(serviceAccount),
  },
  "firebase-auth"
);
