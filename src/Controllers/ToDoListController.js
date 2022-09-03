const ToDoListModel = require("../models/ToDoListModel");

//create profile
exports.CreateToDo = (req, res)=> {
    const reqBody = req.body;

    const TodoSubject = reqBody['TodoSubject'];
    const TodoDescription = reqBody['TodoDescription'];
    const UserName = req.headers['username'];
    const TodoStatus = "New";
    const TodoCreateDate = Date.now();
    const TodoUpdateDate = Date.now();

    const PostBody = {
        UserName: UserName,
        TodoSubject: TodoSubject,
        TodoDescription: TodoDescription,
        TodoStatus: TodoStatus,
        TodoCreateDate: TodoCreateDate,
        TodoUpdateDate: TodoUpdateDate
    };


    ToDoListModel.create(PostBody, (err, data)=> {
        if (err){
            res.status(400).json({status:"Failed", data:err })
        }
        else {
            res.status(201).json({status:"Success", data:data})
        }
    });
};