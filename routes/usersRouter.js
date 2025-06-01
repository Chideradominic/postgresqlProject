const { Router } = require("express");
const usersControllers = require("../controllers/usersControllers");
const usersRouter = Router();
usersRouter.get("/", usersControllers.getAllUsers);
usersRouter.get("/new", usersControllers.createUsernameGet);
usersRouter.post("/new", usersControllers.createUsernamePost);
usersRouter.post("/:id/delete", usersControllers.deleteUsernamePost);
usersRouter.get("/search", usersControllers.searchUsername);
module.exports = usersRouter;
