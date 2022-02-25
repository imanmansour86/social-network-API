const {Thought, User} = require("../models");


module.exports = {
  //get all thoughts
//   getThoughts(req, res) {
//     Thought.find()
//       .then((users) => res.json(users))
//       .catch((err) => res.status(500).json(err));
//   },

  //create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },


};
