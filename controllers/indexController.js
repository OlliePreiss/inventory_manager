function indexPageGet(req,res) {
  console.log("IndexPageGet triggered");
  res.render("index/index", {
    index: "index list"
  });
}

module.exports = {
  indexPageGet,
};
