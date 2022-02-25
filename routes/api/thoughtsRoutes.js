const router = require("express").Router();
const {
  getThoughts,createThought,getSingleThought, deleteThought,updateThought,addReaction
 
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought)

// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought).delete(deleteThought).put(updateThought);

///api/thoughts/:thoughtId/reactions- create reaction and store in reaction's array
router.route("/:thoughtId/reactions").post(addReaction)

module.exports = router;
