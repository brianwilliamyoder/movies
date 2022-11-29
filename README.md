Description: function Ticket (movieName, time, age)

PASS 1st Test: Create a new ticket object with the ticket constructor
Code: Ticket("The Matrix", "12", "30")
Expected Output: 
  newTicket {
    movieName: The Matrix;
    time: 12;
    age: 30;
}

Description: Ticket.prototype.ticketPrice 

PASS 2nd Test: Returns the price of a ticket based of time
Code: newTicket.ticketPrice("The Matrix", "12", "30")
Expected Output:
  $12.00

PASS 3rd Test: Returns the price of a ticket based senior discount and matinee 
Code: newTicket.ticketPrice("The Matrix", "12", "65")
Expected Output:
  $10.00
  