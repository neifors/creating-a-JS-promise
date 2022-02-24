const {techProblems} = require('./engineers')

// setUpFilm
// executor function
const setUpFilm = (resolve, reject) => {
   try {
      // make sure everything is working properly
      if (!techProblems){
         throw new Error('having technical problems')
      }
      techProblems--

      // se up the film
      setTimeout(() => {
         const film = 'Harry Potter and the Chamber of Secrets'
         // resolve with the film
         resolve(film)
      }, 5000)

   } catch (e) {
      //reject with an excuse
      reject(e.message)
   }
}


module.exports = { setUpFilm }
