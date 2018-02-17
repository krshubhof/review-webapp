const User = require('./schema/user')
const Movie = require('./schema/movie')
const Review = require('./schema/review')
const Rating = require('./schema/rating')
const Change = require('./change')

const express = require('express')
const router = express.Router()

router.post('/review',(req,res)=>{
    let review = new Review({
        review: req.body.review
    })
 
    review.save().then((doc) =>{
        res.send(doc)
        console.log(doc)
    }).catch(err =>{
        res.status(400).send('Unable to access database')
    })
 })
 
 router.post('/rating',(req,res) =>{
     let ratings = new Rating({
         ratings: req.body.ratings
     })
 
     ratings.save().then((doc) =>{      
        
         res.send(doc)
        }).catch(err=>{
         res.status(400).send('Unable to access database')
     })
 })


//  router.post('/upload', async (req, res) => {
//      await change()
//      res.json({message: 'COMPLETE'})
//  })

router.get('/movie' ,(req,res) =>{
    Movie.find({}).then((movies)=>{
        res.json(movies)
    }).catch((e)=>{
        res.json(e)
    })
})

module.exports= router