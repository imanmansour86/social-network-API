const User = require("../models/User");

module.exports = {
  //get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  //get user by id
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  //create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  //create a new friend
  // createFriend(req, res) {
  //   User.create(req.body)(
  //     { _id: req.body.userId },
  //     { $addToSet: { friends: User._id } },
  //     { new: true }
  //   )
  //     .then((user) => res.json(user))
  //     .catch((err) => res.status(500).json(err));
  // },

  // Create a comment
  createFriend(req, res) {
    User.findOne(
      { _id: req.body.userId },
    )
     .select('-__v')
      .populate('friends')
      .then((post) =>
        !post
          ? res
              .status(404)
              .json({ message: "friend created, but no friends with this ID" })
          : res.json({ message: "friend created" })
      )
      .catch((err) => {
        console.error(err);
      });
  },

  //delete user by id and associated apps
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  //update user by id
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
