'use strict';

//an array that holds the images to be dislayed on screen from the catalog

Merch.catalogDisplay = [];

// access the element by id
Merch.imgElement = document.getElementById('merch-pic');

// constructor to make merchandise instances
function Merch(filepath) {
  this.filepath = filepath;
  Merch.catalogDisplay.push(this);
}

// make goat instances
new Merch('img/1.jpg');
new Merch('img/2.jpg');
new Merch('img/3.jpg');
new Merch('img/4.jpg');
new Merch('img/5.jpg');
new Merch('img/6.jpg');
new Merch('img/7.jpg');
new Merch('img/8.jpg');
new Merch('img/9.jpg');
new Merch('img/10.jpg');


// attach event listener

// define a callback to run when the event occurs, also the function that runs on page load

// random whole number generator, between 0 and the length of the array

// so that we can randomly pick one from the array and display that goat image

Merch.randomMerch = function() {
  var randomNum = Math.random() * Merch.catalogDisplay.length;
  var wholeRandomNumber = Math.floor(randomNum);
  var singleRandomMerchObject = Merch.catalogDisplay[wholeRandomNumber];

  // set the src attribute of the img element
  Merch.imgElement.src = singleRandomMerchObject.filepath;
};

Merch.imgElement.addEventListener('click', Merch.randomMerch);

Merch.randomMerch();