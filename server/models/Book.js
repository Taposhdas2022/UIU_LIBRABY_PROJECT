const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    bookName:{
        type: String,
        required: true
    },
    departmentName:{
        type: String,
        require: true
    },
})

Schema.pre('save', async function (next) {
    const book = this;
    

    next();
})

mongoose.model("Book", Schema);