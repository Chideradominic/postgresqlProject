exports.getAllUsers = (req, res) => {
  res.render("index", { title: "User Data" });
};

exports.sendUsersToDB = (req, res) => {
  const userName = req.body;
  console.log("username to be saved:", userName);
  res.render("newUsers", { title: "New Users", userName: userName });
};
