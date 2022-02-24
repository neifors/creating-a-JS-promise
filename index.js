const { buyTickets } = require("./ticketOffice");
const { eatPopcorns, buyingPopcorns, complain } = require("./customerActions");
const { setUpFilm } = require("./projectionistRoom");

let queue = ['Ikena', 'Marco', 'Isabel', 'Mike', 'Jesse']



async function goToTicketOffice(cust) {
   console.log(`${cust} approaches the counter`)
   try{
      const film = await setUpFilm()
      console.log("The film is starting now")
      eatPopcorns(cust,film)
   } catch (err) {
      complain(cust,err)
   }
}



for ( let cust of queue){
   buyTickets(cust)
   buyingPopcorns(cust, 'using bathroom')
}
