const express = require ('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const articlesRoutes = require('./routes/articles')
const errorHandler = require('./middlewares/errorHandler')
const usersRouter = require("./routes/users")

const app = express()
connectDB()

app.use(cors())
app.use(express.json())
app.use('/articles' , articlesRoutes)
app.use('/users' , usersRouter)



app.get("/" , (req , res) =>{
    res.json({
        message : "Articles API is running"
    })
})

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT , () =>{
    console.log(`Server is running on port ${PORT}`)
})