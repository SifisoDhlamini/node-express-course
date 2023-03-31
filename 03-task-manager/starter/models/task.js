const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
   name:{
         type: String,
         required: [true, "Must provide a name for the task"],
         trim: true,
         minlength: [3, "Name must be at least 3 characters long"],
         maxlength: [20, "Name must be less than 20 characters long"]
   },
   completed: {
         type: Boolean,
         default: false
   }
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;