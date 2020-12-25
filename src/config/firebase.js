import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

export const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  clientEmail: process.env.CLIENT_EMAIL,
  privateKey: process.env.PRIVATE_KEY,
};

export const firebase = admin.initializeApp({
  credential: admin.credential.cert(config),
  databaseURL: process.env.DATABASE_URL,
});
