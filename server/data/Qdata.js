
import { getQdata } from '../database/database.js';
import MongoDb, { Int32 } from 'mongodb';
// const ObjectId = MongoDb.ObjectId;

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
  return getQdata().updateMany(
    {},
    {$set : {"answers.$[elem].cnt":0}},
    {arrayFilters:[{"elem.cnt": {$gte:0}}]}
  )
    
    
}


export async function incrementByIdAndType(id,type) {
  return getQdata()
  .updateOne(
    { id: new Int32(id) },
    { $inc: { "answers.$[element].cnt": 1 } },
    {arrayFilters:[{"element.type":type}]},
    { new: true }
  )
    
}



export async function incrementByMBTI(MBTI) {
  return getQdata()
  .updateOne(
    { id: "MBTI" },
    { $inc: { "MBTI.$[element].cnt": 1 } },
    {arrayFilters:[{"element.id":MBTI}]},
    { new: true }
  )
    
}
export async function resetMBTI() {
  return getQdata()
  .updateOne(
    { id: "MBTI" },
    { $set: { "MBTI.$[element].cnt": 0 } },
    {arrayFilters:[{"element.cnt": {$gte:0}}]},
    { new: true }
  )
    
}
export async function getMBTI() {
  return getQdata().find({ id: "MBTI" }).toArray();
    
    
}


// export async function createUser(user) {
//   return getUsers()
//     .insertOne(user)
//     .then((data) => data.insertedId.toString());
// }

// function mapOptionalUser(user) {
//   return user ? { ...user, id: user._id.toString() } : user;
// }
