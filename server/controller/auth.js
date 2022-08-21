import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {} from 'express-async-errors';
import * as userRepository from '../data/auth.js';
import { config } from '../config.js';

export async function getQdata(req, res) {
  
  const data = await (
    userRepository.getAll());
  res.status(200).json(data);
  console.log(data);
}

export async function getQdataById(req, res, next) {
  const id = req.params.id;
  
  const Qdata = await userRepository.findById(id);

  if (!Qdata) {
    return res.status(404).json({ message: `${id}th question is not found` });
  }
  // if (tweet.userId !== req.userId) {
  //   return res.sendStatus(403);
  // }
  // const updated = await tweetRepository.update(id, text);
  res.status(200).json(Qdata);
}

export async function updateQdata(req, res, next) {
  const id = req.params.id;
  const type = req.params.type;
  const Qdata = await userRepository.incrementByIdAndType(id,type);

  if (!Qdata) {
    return res.status(404).json({ message: `${id}th question is not found` });
  }
  // if (tweet.userId !== req.userId) {
  //   return res.sendStatus(403);
  // }
  // const updated = await tweetRepository.update(id, text);
  res.status(200).json(Qdata);
}








export async function signup(req, res) {
  const { username, password, name, email, url } = req.body;
  const found = await userRepository.findByUsername(username);
  if (found) {
    return res.status(409).json({ message: `${username} already exists` });
  }
  const hashed = await bcrypt.hash(password, config.bcrypt.saltRounds);
  const userId = await userRepository.createUser({
    username,
    password: hashed,
    name,
    email,
    url,
  });
  const token = createJwtToken(userId);
  res.status(201).json({ token, username });
}

export async function login(req, res) {
  const { username, password } = req.body;
  const user = await userRepository.findByUsername(username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid user or password' });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: 'Invalid user or password' });
  }
  const token = createJwtToken(user.id);
  res.status(200).json({ token, username });
}

function createJwtToken(id) {
  return jwt.sign({ id }, config.jwt.secretKey, {
    expiresIn: config.jwt.expiresInSec,
  });
}

export async function me(req, res, next) {
  const user = await userRepository.findById(req.userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json({ token: req.token, username: user.username });
}
