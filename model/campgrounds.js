const mongoose = require("mongoose");
const { Schema } = mongoose;

const campgroundSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // reviews: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: ""
    //     }
    // ],
    image: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})


const Campground = mongoose.model("Campground", campgroundSchema);

module.exports = Campground;