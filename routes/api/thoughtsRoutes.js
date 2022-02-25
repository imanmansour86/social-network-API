const router = require("express").Router();
const {
  createThought,
 
} = require("../../controllers/thoughtController");

// /api/users
router.route("/").post(createThought)

// // /api/users/:userId
// router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

// // /api/users/:userId/friends/:friendId
// router.route("/:userId/friends/:friendId").post(createFriend);

module.exports = router;
