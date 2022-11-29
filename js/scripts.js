//Business Logic
function Ticket(movieName, time, age) {
  this.movieName = movieName;
  this.time = time;
  this.age = age;
}

Ticket.prototype.ticketPrice = function() {
  if (this.time < 15 && this.age >= 65) {
    return "10.00";
  } else if (this.time > 15 && this.age >= 65) {
    return "11.00"
  } else if (this.time < 15 && this.age < 65) {
    return "12.00";
  } else {
    return "20.00"
  }
} 