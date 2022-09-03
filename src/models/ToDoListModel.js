const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    UserName:{type:String},
    TodoSubject:{type:String},
    TodoDescription:{type:String},
    TodoStatus:{type:String, default:"New"},
    TodoCreateDate:{type:Date, default: Date},
    TodoUpdateDate:{type:Date, default: Date}
}, {versionKey:false});
const ToDoListModel = mongoose.model('todolist',DataSchema);
module.exports = ToDoListModel;
