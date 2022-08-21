import { getUsers } from '../database/database.js';
import { getQdata } from '../database/database.js';
import MongoDb, { Int32 } from 'mongodb';
const ObjectId = MongoDb.ObjectId;

// export async function findByUsername(username) {
//   return getUsers()
//     .findOne({ username }) //
//     .then(mapOptionalUser);
// }

// export async function findById(id) {
//   return getUsers()
//     .findOne({ _id: new ObjectId(id) })
//     .then(mapOptionalUser);
// }

export async function findById(id) {
  return getQdata().findOne({ id: new Int32(id) })
    
    
}

export async function getAll() {
  return getQdata().find().toArray()
    
    
}
export async function cntReset() {
  return getQdata().find()
    
    
}


export async function incrementByIdAndType(id,type) {
  return getQdata()
  .findOneAndUpdate(
    { id: new Int32(id) },
    { $inc: { "answers.$[element].cnt": 1 } },
    {arrayFilters:[{"element.type":type}]},
    { returnDocument: 'after' }
  )
    
}


// export async function createUser(user) {
//   return getUsers()
//     .insertOne(user)
//     .then((data) => data.insertedId.toString());
// }

// function mapOptionalUser(user) {
//   return user ? { ...user, id: user._id.toString() } : user;
// }
