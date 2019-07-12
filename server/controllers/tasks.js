const mongoose = require("mongoose");
const Task = mongoose.model("Task");

module.exports = {
    index: function(req, res) {        
        Task.find({}, function(err, task){
            if(err){
                console.log("Returned error", err);
                // respond with JSON
                res.json({message: "Error showing all", error: err})
            }
            else {
                // respond with JSON
                res.json({message: "Successfully showing all", data: task})
            }
        })
    },

    view: function(req, res) {
        Task.find({_id: req.params.id}, function(err, task){
            if(err){
                console.log("Error finding task", err);
            } else {
                res.json({message: "Successfully found task", data:task})
            }
        })
    },

    create: function(req, res) {
        var task = new Task({title: req.body.title, description: req.body.description, completed: req.body.completed, created_at: req.body.created_at, updated_at: req.body.updated_at})
        task.save(function(err){
            if(err){
                console.log("Error creating a task!");
            } else {
                res.json({message: "Successfully created task", data: task});
            }
        })
    },

    update: function(req, res) {
        
        Task.find({name: req.params.name}, function(err, task){
            if(err){
                console.log("Error finding task");
            } else {
                console.log("User found");
                res.json({message: "Successfully found task", data: task});
            }
        })
    },

    delete: function(req, res) {
        Task.find({name: req.params.name}, function(err, task){
            if(err){
                console.log("Error finding task");
            } else {
                console.log("User found");
                res.json({message: "Successfully found task", data: task});
            }
        })
    }


    // add_quote: function(req, res) {
    //     console.log("Name:", req.body.name);
    //     console.log("Quote:", req.body.quote);
    //     var user = new Quote({name: req.body.name, quote: req.body.quote});
    //     user.save(function(err){
    //         if(err){
    //             console.log("Error creating a new user", err);
    //         } else {
    //             res.redirect("/quotes");
    //         }
    //     });
    // },

    // view_quotes: function(req, res) {
    //     console.log("Finding all quotes");
    //     Quote.find({}, function(err, quotes){
    //         if(err){
    //             console.log("Error finding quotes");
    //         }
    //         res.render("quotes", {quotes: quotes});
    //     })
    // }
};