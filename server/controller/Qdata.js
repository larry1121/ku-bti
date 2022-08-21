

import * as QdataRepository from '../data/Qdata.js';


export async function getQdata(req, res) {
  
  const data = await (
    QdataRepository.getAll());
  res.status(200).json(data);
  console.log(data);
}

export async function getQdataById(req, res, next) {
  const id = req.params.id;
  
  const Qdata = await QdataRepository.findById(id);

  if (!Qdata) {
    return res.status(404).json({ message: `${id}th question is not found` });
  }
  // if (tweet.QdataId !== req.QdataId) {
  //   return res.sendStatus(403);
  // }
  // const updated = await tweetRepository.update(id, text);
  res.status(200).json(Qdata);
}

export async function updateQdata(req, res, next) {
  const id = req.params.id;
  const type = req.params.type;
  const Qdata = await QdataRepository.incrementByIdAndType(id,type);

  if (!Qdata) {
    return res.status(404).json({ message: `${id}th question is not found` });
  }
  // if (tweet.QdataId !== req.QdataId) {
  //   return res.sendStatus(403);
  // }
  // const updated = await tweetRepository.update(id, text);
  res.status(200).json(Qdata);
}
export async function cntQdataReset(req, res, next) {
  
  const Qdata = await QdataRepository.cntReset();

  if (!Qdata) {
    return res.status(404).json({ message: `${id}th question is not found` });
  }
  
  res.status(200).json(Qdata);
}






