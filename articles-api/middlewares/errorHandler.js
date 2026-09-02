const errorHandler = (err , req , res , next) => {
    console.log(err)

    if(err.name === "CastError"){//این خطا مربوط به ای دی نامعتبره
        return res.status(400).json({
            message : "Invalid Article ID"
        })
    }
    res.status(err.statusCode || 500).json({
        message: err.message || "Server error",
        errors : err.errors
    })
}

module.exports = errorHandler
