const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    username: {
      type: String,
      required: true
    },

    followers_count: {
      type: Number,
      required: true
    },

    friends_count: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("User", UserSchema);
