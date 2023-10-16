// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
const UserController = require('./controllers/UserController');
const ThoughtsController = require('./controllers/ThoughtsController');

const router = express.Router();

router.post('/users', UserController.createUser);
router.get('/users', UserController.findUsers);
router.get('/users/:id', UserController.findUser);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.deleteUser);

router.post('/thoughts', ThoughtsController.createThought);
router.get('/thoughts', ThoughtsController.findThoughts);
router.get('/thoughts/:id', ThoughtsController.findThought);
router.put('/thoughts/:id', ThoughtsController.update);
router.delete('/thoughts/:id', ThoughtsController.deleteThought);

module.exports = router;
