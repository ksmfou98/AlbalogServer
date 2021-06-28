import express from 'express';
const router = new express.Router();
//middleware
import userAuth from '../middleware/userAuth';
//controller
import shiftController from '../controllers/shiftController';

//create_shift
router.post(
  '/location/:locationId/create',
  userAuth,
  shiftController.create_shift
);

//get 1 employee shift
router.get('/employee/:employeeId', userAuth, shiftController.get_shifts);

//get all shifts for current location
router.get('/location/:locationId', userAuth, shiftController.get_all_shifts);

module.exports = router;
