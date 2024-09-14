const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Campground = require("./model/campgrounds")

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/hackathon');
    console.log("created")
}


app.get("/", async (req, res) => {
    const camp = await Campground.find({})
    res.send(camp);
})

app.listen(3000, () => {
    console.log(`listening at ${port}`);
})