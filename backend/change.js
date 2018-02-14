const movdata = require('./config/movieData')
const Movie =require('./schema/movie.js')

async function split(){
    movdata.forEach(async (data)=>{
      data.actors_list = data.actors_list.replace('[','').replace(']','').replace(/u/gi,'').replace(/'/gi,'').replace(/"/gi,'')
      const a = data.actors_list.split(',')
      const movie = new Movie({
          name: data.title,
          actors: a,
          certification:data.content_rating,
          duration: data.duration,
          genre:data.genre
      })
      
      await movie.save()
    })
}

module.exports = split