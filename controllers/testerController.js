const { testers } = require('../db/seed');

function testerListGet(req,res) {
  console.log("testerPageGet triggered");
  res.render("tester/index", {
    testers: testers
  });
}

function testerNewGet(req, res) {
  console.log("tester New Get triggered");
  res.render("tester/createTester");
}

function testerNewPost(req,res) {
  const { name, email } = req.body
  const newTester = { id: 3, name: name, email: email}
  testers.push(newTester)
  res.redirect("/tester")
}

module.exports = {
  testerListGet,
  testerNewGet,
  testerNewPost
};
