const express = require ('express')
const Article = require ('../models/Articles')
const check = require("../validators/articleValidator")
const AppError = require("../utils/AppError")


const router = express.Router()

router.get("/" , async (req , res , next) => {
    try{
        const category = req.query.category
        const sort = req.query.sort
        const sortBy = req.query.sortBy
        const search = req.query.search

        if( sort && sort !== "asc" && sort !=="desc" ) {
            throw new AppError("Invalid sort" , 400)
        }

        if(sortBy && sortBy !== "title" && sortBy !== "readingTime") {
            throw new AppError("Invalid sortBy" , 400)
        }
        
        console.log(sort)
        const filter = {}
        if (category) {
            filter.category = category
        }
        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } }
            ]
        }
        console.log(filter)

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


        // const total = await Article.countDocuments()
        const total = await Article.countDocuments(filter)
        if( category && total ===0){
            throw new AppError("Category not found" , 404)
        }
        const totalPages = Math.ceil(total / currentLimit)
        if ( currentPage > totalPages && total > 0 ){
            throw new AppError("Page not found" , 404)
        }
        
        // const articles = await Article.find()
        //                        .skip((currentPage - 1) * limit)
        //                        .limit(currentLimit)
        let sortOrder = 1
        if( sort === "desc") {
            sortOrder = -1
        }

        const sortField = sortBy || "readingTime"
        const articles = await Article.find(filter)
                                        .sort({ [sortField] : sortOrder })
                                        .skip((currentPage - 1) * currentLimit)
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