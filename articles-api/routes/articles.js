const express = require ('express')
const Article = require ('../models/Articles')

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
        const article = await Article.create(req.body)
        res.status(201).json(article)
    } catch(error){
        res.status(500).json({
            message:"Failed to create article"
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

module.exports = router