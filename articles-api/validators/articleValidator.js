const Validator = require("fastest-validator")

const v = new Validator()

const articleSchema = {
    image: {
        type: "string",
        min: 1
    },

    title: {
        type: "string",
        min: 1
    },

    description: {
        type: "string",
        min: 1
    },

    writter: {
        type: "string",
        min: 1
    },

    category: {
        type: "string",
        min: 1
    },

    readingTime: {
        type: "number",
        positive: true
    }
}

const check = v.compile(articleSchema)

module.exports = check