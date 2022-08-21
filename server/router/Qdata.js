import express from 'express';
import {} from 'express-async-errors';

import * as QdataController from '../controller/Qdata.js';


const router = express.Router();


router.get('/',QdataController.getQdata);
router.put('/:id/:type',QdataController.updateQdata);
router.put('/reset',QdataController.cntQdataReset);
router.put('/MBTI/hello/:MBTI',QdataController.updateMBTI);
router.put('/resetmbti',QdataController.mbtiReset);
router.get('/:id',QdataController.getQdataById);
router.get('/getmbti/all',QdataController.getMBTI);



export default router;
