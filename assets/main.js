
// prendere elementi html e convertirli in variabili cosi da poterli gestire
const formEl = document.querySelector("form");
const nameEl = document.getElementById("name");
const kmEl = document.getElementById("km");
const ageEl = document.getElementById("age");

const ticketNameEl = document.getElementById('ticketName')
const ticketDiscountEl = document.querySelector('.ticketDiscount')
const ticketCarriageEl = document.querySelector('.ticketCarriage')
const ticketCodeEl = document.querySelector('.ticketCode')
const ticketPriceEl = document.querySelector('.ticketPrice')

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

// conversione in variabili i valori degli elementi
  const name = nameEl.value;
  const km = kmEl.value;
  const age = ageEl.value;
  console.log(name, km, age);


  
  // calcolo del prezzo senza sconto
  const priceKm = 0.21;
  const basePrice = km * priceKm;

  if (age === '1') {
    const minorDiscount = basePrice * 0.2;
    const minorDiscountTotal = basePrice - minorDiscount;
    console.log(minorDiscountTotal.toFixed(2));
  } else if (age === '2') {
    const overDiscount = basePrice * 0.4;
    const overDiscountTotal = basePrice - overDiscount;
    console.log(overDiscountTotal.toFixed(2));
  }else{
    console.log(basePrice.toFixed(2));
  }

  


});


