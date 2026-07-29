const express = require ('express')
const Article = require ('../models/Articles')
const check = require("../validators/articleValidator")

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

router.post("/" ,async (req , res) => {
    try{
        const result = check(req.body)
        if(result !== true){
            return res.status(400).json({
                message : " Validation Failed",
                errors: result
            })
        }
        const article = await Article.create(req.body)
        res.status(201).json(article)
    } catch(error){
        console.log(error)

        res.status(500).json({
            message:"Failed to create article",
            error : error.message
        })
    }
})

router.get("/:id" , async (req , res) => {
    try{
        const article = await Article.findById(req.params.id)
        if(!article){
            return res.status(404).json({
                message : "Article not found"
            })
        }
        res.status(200).json(article)

    }catch(error){
        res.status(500).json({
            message: "Failed to get article"
        })
    }
})

router.delete("/:id" , async (req , res) => {
    try{
        const article = await Article.findByIdAndDelete(req.params.id)
        if(!article) {
            return res.status(404).json({
                message : "Article not found"
            })
        }
        res.status(200).json({
            message : "Article deleted successfully"
        })

    } catch(error){
        console.log(error)

        res.status(500).json({
            message : "Failed to delete article"
        }
        )

    }
})

router.put("/:id" , async (req , res) => {
    try{
        const result = check(req.body)
        if(result !== true){
            return res.status(400).json({
                message : "Validation Failed",
                errors : result
            })
        }

        const article = await Article.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true }
        )
        if(!article){
            return res.status(404).json({
                message : "Article not found"
            })
        }
        res.status(200).json(article)

    }catch(error){
        console.log(error)

        res.status(500).json({
            message : "Failed to update article"
        })

    }
})

module.exports = router