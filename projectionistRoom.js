let {techProblems} = require('./engineers')


// setUpFilm
// executor function
const setUpFilm = (resolve, reject) => {
   try {
      // make sure everything is working properly
      if (!techProblems){
         throw new Error('having technical problems')
      }
      techProblems--
      // set up the film
      setTimeout(() => {
         const films = ['Harry Potter and the Chamber of Secrets', 'Pretty Woman', 'The Wizard of Ox', 'The Notebook', 'The Godfather']
         // resolve with the film
         resolve(films)
      }, 5000)
      

   } catch (e) {
      //reject with an excuse
      reject(e.message)
   }
}


module.exports = { setUpFilm }
