const { User, Thought } = require("../models");

module.exports = {
  async getAllThoughts(req, res) {
    try {
      const dbThoughtData = await Thought.find({});
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async createThought({ body }, res) {
    try {
      const dbThoughtData = await Thought.create(body);
      const newThought = await User.findOneAndUpdate(
        { _id: body.userId },
        { $addToSet: { thoughts: dbThoughtData._id } },
        { new: true }
      );
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
