const mongoose = require("mongoose");
const userModel = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "Username is required"],
        minLength: [3, "Username must be atleast 3 charector"]
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [3, "Password must be atleast 3 charector"],
        maxLength: [15, "Password must be atmost 15 charector"]
    },

}, {timestamps: true})



const user = mongoose.model("user", userModel)

module.exports = user