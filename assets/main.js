// prendere elementi html e convertirli in variabili cosi da poterli gestire
const formEl = document.querySelector("form");
const nameEl = document.getElementById("name");
const kmEl = document.getElementById("km");
const ageEl = document.getElementById("age");

const ticketNameEl = document.getElementById("ticketName");
const ticketDiscountEl = document.getElementById('ticketDiscount')
const ticketCarriageEl = document.getElementById('ticketCarriage')
const ticketCodeEl = document.getElementById('ticketCode')
const ticketPriceEl = document.getElementById('ticketPrice')

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  // conversione in variabili i valori degli elementi
  const name = nameEl.value;
  const km = kmEl.value;
  const age = ageEl.value;
  console.log(name, km, age);

  const ticketNameValue = nameEl.value;
  // const ticketDiscountValue = ticketDiscountEl.value;
  // const ticketCarriageValue = ticketCarriageEl.value;
  // const ticketCodeValue = ticketCodeEl.value;
  // const ticketPriceValue = ticketPriceEl.value;

  // calcolo del prezzo senza sconto
  const priceKm = 0.21;
  const basePrice = km * priceKm;

  if (age === "1") {
    const minorDiscount = basePrice * 0.2;
    const minorDiscountTotal = basePrice - minorDiscount;
    ticketDiscountEl.innerHTML = 'Sconto del 20%'
    ticketNameEl.innerHTML = ticketNameValue
    ticketPriceEl.innerHTML = minorDiscountTotal.toFixed(2)

  } else if (age === "2") {
    const overDiscount = basePrice * 0.4;
    const overDiscountTotal = basePrice - overDiscount;
    ticketDiscountEl.innerHTML = 'Sconto del 40%'
    ticketNameEl.innerHTML = ticketNameValue
    ticketPriceEl.innerHTML = overDiscountTotal.toFixed(2)
  } else {
    ticketNameEl.innerHTML = ticketNameValue
    ticketDiscountEl.innerHTML = 'Prezzo standard'
    ticketPriceEl.innerHTML = basePrice.toFixed(2)
  }
});
