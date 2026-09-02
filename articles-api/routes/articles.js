const express = require ('express')
const Article = require ('../models/Articles')
const check = require("../validators/articleValidator")
const AppError = require("../utils/AppError")


const router = express.Router()

router.get("/" , async (req , res , next) => {
    try{
        const page = Number(req.query.page)
        if(req.query.page && (!Number.isInteger(page) || page < 1)){
            throw new AppError("Invalid page" , 400)
        }
        const currentPage = page || 1

        const limit = Number(req.query.limit)

        if(req.query.limit && (!Number.isInteger(limit) || limit < 1)){
            throw new AppError("Invalid limit" , 400)
        }
        const currentLimit = limit || 5


        const total = await Article.countDocuments()
        const totalPages = Math.ceil(total / currentLimit)
        if ( currentPage > totalPages && total > 0 ){
            throw new AppError("Page not found" , 404)
        }
        
        const articles = await Article.find()
                               .skip((currentPage - 1) * limit)
                               .limit(currentLimit)

        console.log(total)
        console.log(totalPages)

        res.status(200).json({
            currentPage,
            currentLimit,
            total,
            totalPages,
            articles
        })
    } catch(error) {
        next(error)
    }
})

router.post("/" ,async (req , res , next) => {
    try{
        const result = check(req.body)
        if(result !== true){
            throw new AppError("Validation Failed" , 400 , result)
        }
        const article = await Article.create(req.body)
        res.status(201).json(article)
    } catch(error){
        next(error)
    }
})

router.get("/:id" , async (req , res , next) => {
    try{
        const article = await Article.findById(req.params.id)
        if(!article){
            throw new AppError("Article not found" , 404)
        }
        res.status(200).json(article)

    }catch(error){
        next(error)
    }
})

router.delete("/:id" , async (req , res , next) => {
    try{
        const article = await Article.findByIdAndDelete(req.params.id)
        if(!article) {
            throw new AppError("Article not found" , 404)
        }
        res.status(200).json({
            message : "Article deleted successfully"
        })

    } catch(error){
        next(error)
    }
})

router.put("/:id" , async (req , res , next) => {
    try{
        const result = check(req.body)
        if(result !== true){
            throw new AppError("Validation Failed" , 400 , result)
        }

        const article = await Article.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true }
        )
        if(!article){
                throw new AppError("Article not found" , 404)
        }
        res.status(200).json(article)

    }catch(error){
        next(error)

    }
})

module.exports = router