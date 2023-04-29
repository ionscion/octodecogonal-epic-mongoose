const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
} = require("../../controllers/thoughtsController");

router.route("/").get(getAllThoughts).post(createThought);

router.route("/:id").get(getThoughtById);

module.exports = router;
