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

// Get ToDo
exports.GetToDo = (req, res)=> {
    const UserName = req.headers['username'];
    ToDoListModel.find({UserName:UserName}, (err,data) => {
        if (err){
            res.status(400).json({status:"Failed", data:err});
        }
        else {
            res.status(200).json({status:"Success", data:data});
        }
    });
};

// Update ToDo
exports.UpdateToDo = (req, res)=> {
    const TodoSubject = req.body['TodoSubject'];
    const TodoDescription = req.body['TodoDescription'];
    const _id = req.body['_id'];
    const TodoUpdateDate = Date.now();

    const PostBody = {
        TodoSubject: TodoSubject,
        TodoDescription: TodoDescription,
        TodoUpdateDate: TodoUpdateDate
    };

    ToDoListModel.updateOne({_id:_id},{$set:PostBody},(err, data)=> {
        if (err){
            res.status(400).json({status:"Failed", data:err })
        }
        else {
            res.status(200).json({status:"Success", data:data})
        }
    });
};

// Update Status ToDo
exports.UpdateStatusToDo = (req, res)=> {

    const TodoStatus = req.body['TodoStatus'];
    const _id = req.body['_id'];
    const TodoUpdateDate = Date.now();

    const PostBody = {
        TodoStatus: TodoStatus,
        TodoUpdateDate: TodoUpdateDate
    };

    ToDoListModel.updateOne({_id:_id},{$set:PostBody},(err, data)=> {
        if (err){
            res.status(400).json({status:"Failed", data:err })
        }
        else {
            res.status(200).json({status:"Success", data:data})
        }
    });
};

// Remove ToDo
exports.RemoveToDo = (req, res)=> {
    const _id = req.body['_id'];

    ToDoListModel.remove({_id:_id},(err,data)=> {
        if (err){
            res.status(400).json({status:"Failed", data:err })
        }
        else {
            res.status(200).json({status:"Success", data:data})
        }
    });
};

//Get todo by Status
exports.GetToDoByStatus = (req, res)=> {
    const TodoStatus = req.body['TodoStatus'];
    ToDoListModel.find({TodoStatus:TodoStatus}, (err,data) => {
        if (err){
            res.status(400).json({status:"Failed", data:err});
        }
        else {
            res.status(200).json({status:"Success", data:data});
        }
    });
};


//Get todo by Date
exports.GetToDoByDate = (req, res)=> {
    const UserName = req.headers['username'];
    const FromDate = req.body['FromDate'];
    const ToDate = req.body['ToDate'];

    ToDoListModel.find({UserName:UserName,TodoCreateDate:{$gte:new Date(FromDate), $lte:new Date(ToDate)}}, (err,data) => {
        if (err){
            res.status(400).json({status:"Failed", data:err});
        }
        else {
            res.status(200).json({status:"Success", data:data});
        }
    });
};














