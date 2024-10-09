const { users } = require('../db/seed');

function userListGet(req, res) {
  console.log("UserListGet triggered");
  res.render("user/index", {
    users: users
  });
}

function userNewGet(req, res) {
  console.log("user New Get triggered");
  res.render("user/createUser")
}

function userNewPost(req,res) {
  const { name, email, password, company_id } = req.body;
  const user = { id: 4, name: name, email: email, password: password, company_id: company_id }
  users.push(user);
  res.redirect("/user")
}

module.exports = {
  userListGet,
  userNewGet,
  userNewPost
}
