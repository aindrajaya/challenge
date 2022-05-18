const buttonIncrement = document.getElementById('increment');
buttonIncrement.addEventListener('click', function () {
  const increment = document.getElementById('count').innerText++;
});

const buttonDecrement = document.getElementById('decrement');
buttonDecrement.addEventListener('click', function () {
  const increment = document.getElementById('count').innerText--;
});
