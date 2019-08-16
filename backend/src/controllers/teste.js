const client = require("../api");

const params = { screen_name: "ellismarjunior" };

client.get("users/show", params, function(error, user, response) {
  if (!error) {
    const { name, screen_name, followers_count, friends_count } = user;
    console.log(`name: ${name}`);
    console.log(`screen_name:  ${screen_name}`);
    console.log(`followers_count: ${followers_count}`);
    console.log(`friends_count: ${friends_count}`);
  }
});
