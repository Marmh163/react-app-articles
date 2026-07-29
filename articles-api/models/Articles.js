const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema(
    {
    image : {
        type : String,
        required : true,
    },

    title : {
        type : String,
        required : true,
    },

    description : {
        type : String,
        required : true,
    },

    writter : {
        type : String,
        required : true,
    },

    category : {
        type : String,
        required : true,
    },

    readingTime : {
        type : Number,
        required : true,
    },
},
)

const Article = mongoose.model("Article" , articleSchema)

module.exports = Article