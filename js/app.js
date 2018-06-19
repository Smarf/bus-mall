'use strict';

//an array that holds the images to be dislayed on screen from the catalog
Merch.catalog = [];

// a variable that keeps track of the clicks
Merch.clickTracker = 0;

// an array to store all the filenames that represent each merchanise picture
Merch.itemNames = [];

//an array to hold the voting record
Merch.totalVotes = [];

// an array to keep track of the Merch that has been shown on screen

Merch.seenIt = [];

// access to the element, section and unordered list all by ID from the DOM

Merch.imgElement = document.getElementById('merch-pic');
Merch.ulEl = document.getElementById('threePic');
Merch.section = document.getElementById('merch-display');
Merch.firstEl = document.getElementById('selectionOne');
Merch.secondEl = document.getElementById('selectionTwo');
Merch.thirdEl = document.getElementById('selectionThree');



// constructor to make merchandise instances
function Merch(filepath) {
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.timesShown = 0;
  Merch.catalog.push(this);
}

// make goat instances

new Merch('Bag', 'img/bag.jpg');
new Merch('Banana', 'img/banana.jpg');
new Merch('Bathroom', 'img/bathroom.jpg');
new Merch('Boots', 'img/boots.jpg');
new Merch('Breakfast', 'img/breakfast.jpg');
new Merch('Bubblegum', 'img/bubblegum.jpg');
new Merch('Chair', 'img/chair.jpg');
new Merch('Cthulhu', 'img/cthulhu.jpg');
new Merch('Dog Duck', 'img/dog-duck.jpg');
new Merch('Dragon', 'img/dragon.jpg');
new Merch('Pen', 'img/pen.jpg');
new Merch('Pet Sweep', 'img/pet-sweep.jpg');
new Merch('Scissors!', 'img/scissors.jpg');
new Merch('Shark', 'img/shark.jpg');
new Merch('Sweep', 'img/sweep.png');
new Merch('Tauntaun', 'img/tauntaun.jpg');
new Merch('Unicorn', 'img/unicorn.jpg');
new Merch('USB', 'img/usb.gif');
new Merch('Water Can', 'img/water-can.jpg');
new Merch('Wine Glass', 'img/wine-glass.jpg');

// random display a single pic from the catalog
Merch.randomMerch = function() {
  // random whole number generator, between 0 and the length of the array

  var randomNum = Math.random() * Merch.catalog.length;
  var wholeRandomNumber = Math.floor(randomNum);
  var singleRandomMerchObject = Merch.catalog[wholeRandomNumber];

  // set the src attribute of the img element
  Merch.imgElement.src = singleRandomMerchObject.filepath;
};

Merch.imgElement.addEventListener('click', Merch.randomMerch);

Merch.randomMerch();