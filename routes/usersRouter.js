const { Router } = require("express");
const usersControllers = require("../controllers/usersControllers");
const usersRouter = Router();
usersRouter.get("/", usersControllers.getAllUsers);

usersRouter.post("/new", usersControllers.sendUsersToDB);
module.exports = usersRouter;
