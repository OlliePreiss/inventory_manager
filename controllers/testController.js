const { tests } = require('../db/seed');

function testListGet(req,res) {
  console.log("testPageGet triggered");
  res.render("test/index", {
    tests: tests
  });
}

function testNewGet(req, res) {
  console.log("test New Get triggered");
  res.render("test/createTest")
}

function testNewPost(req,res) {
  const { name, type, user_id, company_id } = req.body
  const newTest = { id: 3, name: name, type: type, user_id: user_id, company_id: company_id}
  tests.push(newTest)
  res.redirect("/test")
}

module.exports = {
  testListGet,
  testNewGet,
  testNewPost
};
