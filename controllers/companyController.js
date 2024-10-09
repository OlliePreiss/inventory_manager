const { companies } = require('../db/seed');

function companyListGet(req, res) {
  console.log("Company list get request triggered")
  console.log(companies)
  res.render("company/index", {
    companies: companies
  });
}

function companyNewGet(req, res) {
  console.log("Company New Get triggered");
  res.render("company/createCompany")
}

function companyNewPost(req,res) {
  const { name, industry } = req.body
  const newCompany = { id: 3, name: name, industry: industry}
  companies.push(newCompany)
  res.redirect("/company")
}

module.exports = {
  companyListGet,
  companyNewGet,
  companyNewPost
}
