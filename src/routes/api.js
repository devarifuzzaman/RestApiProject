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
router.get("/getTodo",AuthVerifyMiddleware,ToDoListController.GetToDo);
router.post("/updateTodo",AuthVerifyMiddleware,ToDoListController.UpdateToDo);
router.post("/updateStatusTodo",AuthVerifyMiddleware,ToDoListController.UpdateStatusToDo);
router.post("/removeTodo",AuthVerifyMiddleware,ToDoListController.RemoveToDo);
router.get("/getTodobyStatus",AuthVerifyMiddleware,ToDoListController.GetToDoByStatus);
router.post("/getTodobyDate",AuthVerifyMiddleware,ToDoListController.GetToDoByDate);





module.exports = router;