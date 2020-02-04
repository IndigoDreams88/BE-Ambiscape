const usersRouter = require('express').Router();
const { send405Error } = require('../errorHandling');
const { getUserById, postUser } = require('../controllers/users-controller');

usersRouter.route('/')
  .post(postUser)
  .all(send405Error);

usersRouter.route('/:user_id')
  .get(getUserById)
  // .delete()
  .all(send405Error);

// usersRouter.route('/:user_id/scenarios')
//   .get(getScenariosByUserId)
//   .all(send405Error);

module.exports = usersRouter;