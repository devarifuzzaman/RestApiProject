const express = require('express');
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");
const ProfileController = require("../Controllers/ProfileController");
const ToDoListController = require("../Controllers/ToDoListController");

const router = express.Router();

// Profile
router.post("/createUserProfile", ProfileController.CreateProfile);
router.post("/userLogin", ProfileController.UserLogin);

// Middleware
router.get("/getUserProfile",AuthVerifyMiddleware,ProfileController.GetUserProfile);
router.post("/updateUserProfile",AuthVerifyMiddleware,ProfileController.UpdateUserProfile);

// Todo
router.post("/createTodo",AuthVerifyMiddleware,ToDoListController.CreateToDo);












module.exports = router;