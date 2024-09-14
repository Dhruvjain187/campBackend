const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})


const Review = mongoose.model("Reviews", reviewSchema);