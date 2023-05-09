const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    id:{
        type: String,
        require: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    password:{
        type: String,
        unique: true
    },
    conPassword:{
        type: String,
        unique: true
    },
})

userSchema.pre('save', async function (next) {
    const user = this;
    if(!user.isModified('password')){
        return next();
    }
    user.password = await bcrypt.hash(user.password, 8);
    
    next();
})

mongoose.model("User", userSchema);