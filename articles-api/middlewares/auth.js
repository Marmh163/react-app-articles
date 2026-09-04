const jwt = require("jsonwebtoken")
const AppError = require("../utils/AppError")

const auth = (req, res, next) => {
    try{
        const authHeader = req.headers.authorization
        if (!authHeader) {
            return next(new AppError("Access token is required" , 401))
        }

        const token = authHeader.split(" ")[1]
        if(!token){
            return next(new AppError("Access token is required" , 401))
        }

        const decoded = jwt.verify(
            token, 
            process.env.JWT_SECRET
        )

        req.user = decoded
        next()

    } catch (error) {
        return next(new AppError("Invalid or expired token" , 401))
    }
}

module.exports = auth