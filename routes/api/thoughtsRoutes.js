const router = require("express").Router();

const { getAllThoughts, createThought } = require("../../controllers/thoughtsController");

router.route("/").get(getAllThoughts).post(createThought);

module.exports = router;