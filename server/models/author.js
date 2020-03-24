const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: [3, "Name should be more than 3 characters"]},

})
const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;