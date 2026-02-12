console.log('It works');





const formEl = document.querySelector('form')
const nameEl = document.getElementById('name')
const kmEl = document.getElementById('km')
const ageEl = document.getElementById('age')

const priceKm = 0.21;
const basePrice = kmEl * priceKm;


formEl.addEventListener('submit', function(e){
    e.preventDefault()

    const name = nameEl.value;
    const km = kmEl.value;
    const age = ageEl.value;
    console.log(name, km, age);
    
})