
const User = require('../schema/user')
const Movie = require('../schema/movie')
const Review = require('../schema/review')
const Rating = require('../schema/rating')

const mongoose = require('mongoose')
const chai = require('chai')
const mocha = require('mocha')

const expect = chai.expect
const should = chai.should()
describe('should check user valid email', async () =>{
    before(()=>{
        mongoose.connect('mongodb://127.0.0.1/test')
    })
    
    it('should check user is created',async ()=>{
        let user = new User({
            email:'shubhamsinha086@gmail.com'
        })
        this.res = await user.save()
        this.res.email.should.eql('shubhamsinha086@gmail.com')
    })

    it('should check rating is saved',async ()=>{
        let rating = new Rating({
            userId: this.res._id
        })
        this.rate = await rating.save()
        this.rate.userId.should.eql(this.res._id)
    })
    it('should check valid movie', async ()=>{
        let movie = new Movie({
            name:"Avatar",
            duration:"142min",
            certification:"U/A",
            genre:"Action"
        })
        this.movie = await movie.save()
        this.movie.name.should.eql("Avatar")
        this.movie.duration.should.eql("142min")
        this.movie.certification.should.eql("U/A")
        this.movie.genre.should.eql("Action")
    })

    it('should check valid review', async () =>{
        let review = new Review({
            userId:this.res._id,
            movieId:this.movie._id,
            review:"it was good"
        })
        this.review = await review.save() 
        this.review.userId.should.eql(this.res._id)
    })

    after(()=>{
        User.remove({}).then(()=>{
            console.log('Flushed')
        })
    })
 })

