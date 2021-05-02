const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');
const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount_two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

// fetch exchange rates and update the DOM
function calculate() {
  const curr_one = currency_one.value;
  const curr_two = currency_two.value;
  console.log(curr_one, curr_two);
  fetch(`https://api.exchangerate-api.com/v4/latest/${curr_one}`)
    .then((res) => res.json)
    .then((data) => {
      // console.log(data);
      const rate_number = data.rates[curr_two];
      // console.log(rate);
      rate.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amount_two.value = (amount_two * rate).toFixed(2);
    });
}

// Event Listeners
currency_one.addEventListener('change', calculate);
currency_two.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
amount_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currency_one.value;
  currency_one = currency_two;
  currency_two = temp;
  calculate();
});

calculate();
