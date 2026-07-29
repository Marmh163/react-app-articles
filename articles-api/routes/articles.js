const express = require ('express')
const Article = require ('../models/Articles')
const check = require("../validators/articleValidator")
const AppError = require("../utils/AppError")


const router = express.Router()

router.get("/" , async (req , res) => {
    try{
        const articles = await Article.find()
        res.status(200).json(articles)
    } catch(error) {
        res.status(500).json({
            message : "Failed to get articles"
        })
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
            return res.status(400).json({
                message : "Validation Failed",
                errors: result
            })

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