const book1Price = 19.99;
const book2Price = 24.99;
const book3Price = 14.99;

const book1PriceElement = document.querySelector('.books li:nth-of-type(1) .price');
const book2PriceElement = document.querySelector('.books li:nth-of-type(2) .price');
const book3PriceElement = document.querySelector('.books li:nth-of-type(3) .price');



book1PriceElement.addEventListener('click', function() {
	alert(`The price of Book 1 is $${book1Price}`);
});

book2PriceElement.addEventListener('click', function() {
	alert(`The price of Book 2 is $${book2Price}`);
});

book3PriceElement.addEventListener('click', function() {
	alert(`The price of Book 3 is $${book3Price}`);
});
const button = document.getElementById('mybtn');
button.addEventListener('onclick', function() {
  button.style.backgroundColor = 'red';
});