const tests = [
  {
    id: 1,
    name: "Cord exploratory research",
    type: "survey",
    user_id: 1,
    company_id: 2
  },
  {
    id: 2,
    name: "UX validation",
    type: "mission test",
    user_id: 2,
    company_id: 1
  },
  {
    id: 3,
    name: "Marketing A/B test",
    type: "A/B test",
    user_id: 2,
    company_id: 1
  }

]

const testers = [
  {
    id: 1,
    name: "Omar Abosh",
    email: "omarabosh@hotmail.com",
  },
  {
    id: 2,
    name: "Julie Sweet",
    email: "juliesweet@hotmail.com",
  },
  {
    id: 3,
    name: "Kevin Nelis",
    email: "kevninelis@hotmail.com",
  }
]

const companies = [
  {
    id: 1,
    name: "Accenture",
    industry: "Consulting"
  },
  {
    id: 2,
    name: "Google",
    industry: "Tech"
  },
  {
    id: 3,
    name: "O2",
    industry: "Telco"
  }
]

const users = [
  {
    id: 1,
    name: "Oliver Preiss",
    email: "oliverpreiss@hotmail.com",
    password: "test123",
    company_id: 2
  },
  {
    id: 2,
    name: "Tom Daley",
    email: "tomdaley@hotmail.com",
    password: "test123",
    company_id: 1
  },
  {
    id: 3,
    name: "Big Ben",
    email: "bigben@hotmail.com",
    password: "test123",
    company_id: 1
  }
]

module.exports = {
  tests,
  testers,
  companies,
  users
}
