const Validator = require("fastest-validator")

const v = new Validator()

const userSchema = {
    name: {
        type: "string",
        min: 1
    },
    email: {
        type: "string",
        format: "email"
    },
    password: {
        type: "string",
        min: 6
    }
}

const checkUser = v.compile(userSchema)

module.exports = checkUser