const { User, Thought } = require('../../models');

const userController = {
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .then(UserData => {
        console.log(UserData);  // log the fetched user data
        res.json(UserData);
      })
      .catch(err => {
        console.log(err);  // log the error, if any
        res.status(400).json(err);
      });
    },
    // create a new user
    createUser({ body }, res) {
      User.create(body)
        .then(UserData => res.json(UserData))
        .catch(err => res.status(400).json(err));
    },
}

module.exports = userController;