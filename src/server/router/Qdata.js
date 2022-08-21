import express from 'express';
import {} from 'express-async-errors';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
import * as QdataController from '../controller/Qdata.js';


const router = express.Router();

// const validateCredential = [
//   body('username')
//     .trim()
//     .notEmpty()
//     .withMessage('username should be at least 5 characters'),
//   body('password')
//     .trim()
//     .isLength({ min: 5 })
//     .withMessage('password should be at least 5 characters'),
//   validate,
// ];

// const validateSignup = [
//   ...validateCredential,
//   body('name').notEmpty().withMessage('name is missing'),
//   body('email').isEmail().normalizeEmail().withMessage('invalid email'),
//   body('url')
//     .isURL()
//     .withMessage('invalid URL')
//     .optional({ nullable: true, checkFalsy: true }),
//   validate,
// ];
// router.post('/signup', validateSignup, QdataController.signup);

// router.post('/login', validateCredential, QdataController.login);

// router.get('/me', isQdata, QdataController.me);

router.get('/',QdataController.getQdata);
router.put('/:id/:type',QdataController.updateQdata);
router.put('/reset',QdataController.cntQdataReset);
router.get('/:id',QdataController.getQdataById);


export default router;
