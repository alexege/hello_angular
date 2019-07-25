const mongoose = require("mongoose");
const unique = require("mongoose-unique-validator");

const ReviewSchema = new mongoose.Schema({
    name: {type: String, required: [true, "You must provide a name"], minlength: [3, "Name must have at least 3 characters."]},
    stars: {type: Number, required: [true, "You must provide a rating"], min: [1, "Rating must be at least 1 star"], max: [5, "Rating must be at most 5 stars"]},
    content: {type: String, required: [true, "You must leave a review"], minlength: [3, "Review must be at least 3 characters long."]}
}, {timestamps: true});

const MovieSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Movie title must be provided"], minlength: [3, "Please enter a movie title longer than 3 characters."], unique: true},
    review: [ReviewSchema]
})

MovieSchema.plugin(unique, {message: "This movie is already in the database!"});

mongoose.model("Movie", MovieSchema);
mongoose.model("Review", ReviewSchema);
