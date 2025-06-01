const db = require("../db/queries");
async function getAllUsers(req, res) {
  const usersnames = await db.getAllUsernames();
  console.log("All usernames:", usersnames);
  res.render("index", {
    title: "Create Username",
  });
}
async function createUsernameGet(req, res) {
  const usersnames = await db.getAllUsernames();
  res.render("newUsers", {
    title: "Create Username",
    usersnames: usersnames,
  });
}

async function createUsernamePost(req, res) {
  const { name } = req.body;
  await db.insertUsername(name);
  res.redirect("/");
}
async function deleteUsernamePost(req, res) {
  const { id } = req.params;
  await db.deleteUsername(id);
  res.redirect("/");
}
async function searchUsername(req, res) {
  const search = req.query.search;
  console.log("Search query:", search);
  const usersnames = await db.searchUsername(search);
  if (usersnames.length > 0) {
    res.render("searchedUsers", {
      title: "Search Results",
      usersnames: usersnames,
    });
  } else {
    res.render("searchedUsers", {
      title: "No Results Found",
      usersnames: [],
    });
  }
  console.log("Search results:", usersnames);
}
module.exports = {
  getAllUsers,
  createUsernameGet,
  createUsernamePost,
  deleteUsernamePost,
  searchUsername,
};
