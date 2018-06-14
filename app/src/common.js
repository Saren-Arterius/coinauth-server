import Redis from 'ioredis';
import firebase from 'firebase-admin';
import {CONFIG} from './config';

export const firebaseInstance = firebase.initializeApp({
  credential: firebase.credential.cert(CONFIG.firebase.credential),
  databaseURL: CONFIG.firebase.databaseURL
});

export const redis = new Redis(CONFIG.redis);
