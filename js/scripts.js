//Business Logic

function Ticket(movieName, time, age) {
  this.movieName = movieName;
  this.time = time;
  this.age = age;
}

Ticket.prototype.ticketPrice = function() {
  if (this.time <= 15 && this.age >= 65) {
    return "10.00";
  } else if (this.time > 15 && this.age >= 65) {
    return "11.00"
  } else if (this.time <= 15 && this.age < 65) {
    return "12.00";
  } else {
    return "20.00"
  }
} 

//User Interface Logic

function displayPrice()

function handleFormSubmission(event) {
  event.preventDefault();
  const movieSelection = document.getElementById("movie-list").value;
  const timeSelection = document.getElementById("times").value;
  const ageSelection = document.getElementById("age").value;
  let newTicket = new Ticket(movieSelection, timeSelection, ageSelection);
  newTicket.ticketPrice();

}