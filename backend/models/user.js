const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true }, //empty string NONO!
  content: { type: String, required: true }, //empty string is enough
  isDone: { type: Boolean, default: false },
});

const dashboardSchema = new mongoose.Schema({
  title: { type: String, required: true }, //empty string NONO!
  todos: [todoSchema], //empty list as default?
});

const userSchema = new mongoose.Schema({
  username: { type: String }, //empty string NONO!  !!unique
  email: { type: String }, //empty string NONO! + validation
  providers: {
    google: { type: String, unique: true, sparse: true },
    facebook: { type: String, unique: true, sparse: true },
    github: { type: String, unique: true, sparse: true },
  },
  dashboards: [dashboardSchema], //empty list as default?
});

const User = mongoose.model("user", userSchema);

module.exports = User;
