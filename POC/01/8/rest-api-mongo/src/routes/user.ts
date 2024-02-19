import express from 'express';
const router = express.Router();

import {
  handleUpdateUserById,
  handleGetAllUsers,
  handleGetUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} from '../controllers/user';

// Routes - REST API
router.route('/').get(handleGetAllUsers).post(handleCreateNewUser);

// Dynamic Path Paramters
router
  .route('/:id')
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

export { router };
