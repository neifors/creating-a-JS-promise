const {setUpFilm} = require('./projectionistRoom')

// buyTickets
// this is going to return a promise (you will see the film)
const buyTickets = () => new Promise(setUpFilm)

module.exports = { buyTickets }
