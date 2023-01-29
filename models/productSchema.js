const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: {type: String, require: true},
    desciption: {type: String, required: true}
})