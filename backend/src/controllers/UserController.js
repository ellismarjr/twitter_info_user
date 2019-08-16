const client = require("../api");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await User.find().sort("-createdAt");

    return res.json(users);
  },

  async store(req, res) {
    const { username } = req.body;

    const params = { screen_name: username };

    const userExists = await User.findOne({ username });

    if (userExists) {
      console.log("User already exist");
      return res.json(userExists);
    }

    client.get("users/show", params, async function(
      error,
      user_infos,
      response
    ) {
      if (!error) {
        const {
          name,
          screen_name: username,
          followers_count,
          friends_count
        } = user_infos;

        const user = await User.create({
          name,
          username,
          followers_count,
          friends_count
        });

        console.log(user_infos);

        return res.json(user);
      }
    });
  }
};
