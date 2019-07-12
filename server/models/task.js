const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String, default: ''},
    completed: {type: Boolean, default: false},
    created_at: {type: Date},
    updated_at: {type: Date},
}, {timestamps: true});

mongoose.model("Task", TaskSchema);