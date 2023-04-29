const { User, Thought } = require("../models");

module.exports = {
  //get all available thoughts
  async getAllThoughts(req, res) {
    try {
      const dbThoughtData = await Thought.find({});
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  //get thought by ID
  async getThoughtById({ params }, res) {
    try {
      const dbThoughtData = await Thought.findOne({ _id: params.id });
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  //create a new thought
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
  //update thought
  async updateThought({ body, params }, res) {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate(
        { _id: params.id },
        body,
        { new: true, runValidators: true }
      );
      if (!dbThoughtData) {
        res.status(404).json({ message: "No thought found with this id!" });
        return;
      }
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  //delete thoughts
  async deleteThought({ params }, res) {
    try {
      const dbThoughtData = await Thought.findOneAndDelete({ _id: params.id });
      if (!dbThoughtData) {
        res.status(404).json({ message: "No thought found with this id!" });
        return;
      }
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
