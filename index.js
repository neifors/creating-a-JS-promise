const { buyTickets } = require("./ticketOffice");
const { eatPopcorns, buyingPopcorns, complain } = require("./customerActions");

let queue = ['Ikena', 'Marco', 'Isabel', 'Mike', 'Jesse']



async function goToTicketOffice(cust, filmReference) {
   console.log(`${cust} approaches the tickets office of the Vintage Films Cinema`)
   try{
      const films = await buyTickets()
      console.log(`The film ${films[filmReference]} is starting now`)
      eatPopcorns(cust,films[filmReference])
   } catch (err) {
      complain(cust,err)
   }
}

let filmCounter = 0;


for ( let cust of queue){
   goToTicketOffice(cust,filmCounter)
   buyingPopcorns(cust)
   filmCounter++
}
