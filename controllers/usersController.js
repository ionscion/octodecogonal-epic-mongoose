const { User, Thought } = require("../models");

module.exports = {
  // get all users
  async getAllUsers(req, res) {
    try {
      const dbUserData = await User.find({})
        .populate({
          path: "thoughts",
          select: "-__v",
        })
        .select("-__v")
        .sort({ _id: -1 });
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get one user by id
  async getUserById({ params }, res) {
    try {
      const dbUserData = await User.findOne({ _id: params.id })
        .populate({
          path: "thoughts",
          select: "-__v",
        })
        .select("-__v");
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
      }
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create user
  async createUser({ body }, res) {
    try {
      const dbUserData = await User.create(body);
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // update user by id
  async updateUser({ params, body }, res) {
    try {
      const dbUserData = await User.findOneAndUpdate({ _id: params.id }, body, {
        new: true,
        runValidators: true,
      });
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
      }
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // delete user
  async deleteUser({ params }, res) {
    try {
      const dbUserData = await User.findOneAndDelete({ _id: params.id });
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
      }
      // remove user's thoughts
      await Thought.deleteMany({ username: dbUserData.username });
      res.json({ message: "User and associated thoughts deleted!" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // add friend
  async addFriend({ params }, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: params.userId },
        { $push: { friends: params.friendId } },
        { new: true }
      );
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
      }
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // remove friend
  async removeFriend({ params }, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId } },
        { new: true }
      );
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
      }
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
