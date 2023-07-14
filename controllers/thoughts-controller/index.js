const { Thought, User } = require('../../models');

const thoughtController = {
  getThoughts(req, res) {
    Thought.find({})
      .then(thoughtData => res.json(thoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  addThought({ body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'No user found' });
          return;
        }
        res.json(userData);
      })
      .catch(err => res.json(err));
  }
}
  

module.exports = thoughtController;