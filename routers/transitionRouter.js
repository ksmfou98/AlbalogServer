import express from 'express';
const router = new express.Router();

import * as transitionController from '../controllers/transitionController';
import userAuth from '../middleware/userAuth';

router.post(
  '/:locationId/create',
  userAuth,
  transitionController.create_transition
);

router.get('/:locationId', userAuth, transitionController.updateTransition);

router.patch(
  '/:locationId/update',
  userAuth,
  transitionController.updateTransition
);

router.delete(
  '/:locationId/delete',
  userAuth,
  transitionController.deleteTransition
);

module.exports = router;
