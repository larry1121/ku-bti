import MongoDb from 'mongodb';
import { config } from '../config.js';

let db;
export async function connectDB() {
  return MongoDb.MongoClient.connect(config.db.host) //
    .then((client) => {
      db = client.db("KU-bti");
      console.log('init',db);
    });
}

export function getQdata() {
  return db.collection('Qdata');
}

export function getUsers() {
  return db.collection('users');
}

export function getTweets() {
  return db.collection('tweets');
}
