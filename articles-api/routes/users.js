const express = require("express")
const router = express.Router()

const checkUser = require("../validators/userValidator")
const User = require("../models/User")
const bcrypt = require("bcrypt")
const AppError = require("../utils/AppError")
const jwt = require("jsonwebtoken")
const auth = require("../middlewares/auth")

router.post("/register", async (req, res, next) => {
    try {
        const result = checkUser(req.body)

        if (result !== true) {
            return next(new AppError("Validation failed", 400, result))
        }

        const { name, email, password } = req.body
        const normalizedEmail = email.toLowerCase()

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email: normalizedEmail,
            password: hashedPassword
        })

        const userResponse = {
            id: user._id,
            name: user.name,
            email: user.email
        }

        res.status(201).json(userResponse)

    } catch (error) {
        if (error.code === 11000) {
            return next(new AppError("Email already Exists", 409))
        }

        next(error)
    }
})


router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({
            email: email.toLowerCase()
        })

        if (!user) {
            return next(new AppError("Invalid email or password", 401))
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        )

        if (!isPasswordCorrect) {
            return next(new AppError("Invalid email or password", 401))
        }

        
        const token = jwt.sign(
            {
                id: user._id,
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET , 
            {
                expiresIn : "1d"
            }
        )


        const userResponse = {
            id: user._id,
            name: user.name,
            email: user.email
        }

        res.status(200).json({
            user: userResponse,
            token
        })

    } catch (error) {
        next(error)
    }
})



router.get("/me" , auth , async (req , res, next) => {
    try{
        const user = await User.findById(req.user.id).select("_password")
        if( !user ){
            return next(new AppError("User not found" , 404))
        }
        res.status(200).json(user)
    }
    catch (error) {
        next(error)
    }
})
module.exports = router