// eatPopcorns
// run if promise is fulfilled
const eatPopcorns = (name, film) => {
   console.log(`${name} is eating popcorns while enjoying watching ${film}.`)
}


// complain
// run if promise is rejected
const complain = (name, excuse) => {
   console.log(`The film is not gonna be projected because ${excuse} and ${name} is angry cause already paid for the popcorns.`)
}



// doSomethingWhileWaiting
const buyingPopcorns = (name) => {
   console.log(`${name} is buying popcorns whilst waiting for the film starts.`)
}


module.exports = { eatPopcorns, complain, buyingPopcorns }
