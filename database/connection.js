const admin = require("firebase-admin");

const serviceAccount = require("../chat-3af6d-firebase-adminsdk-dzw2h-3a0b60a5b8 (1).json");
 admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
 });

 const connection = admin.firestore();
 
module.exports = connection;
