"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseApp = void 0;
const admin = require("firebase-admin");
const serviceAccount = JSON.parse(process.env.FIREBASE_AUTH_KEY);
exports.firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
}, "firebase-auth");
//# sourceMappingURL=auth-firebase.config.js.map