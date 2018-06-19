'use strict';

//an array that holds the images to be dislayed on screen from the merchObjects
Merch.merchObjects = [];

// a variable that keeps track of the clicks
Merch.clickTracker = 0;

// an array to store all the names of each individual item

Merch.catalog = [];

//an array to hold the voting record
Merch.totalVotes = [];

// an array to keep track of the Merch that has been shown on screen

Merch.previouslyViewed = [];

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
  Merch.merchObjects.push(this);
}

// make merchObject instances

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


// random display a single pic from the merchObjects

Merch.randomMerch = function() {
  // random whole number generator, between 0 and the length of the array
  do {
    var randomFirst = Math.floor(Math.random() * Merch.merchObjects.length);
    var randomSecond = Math.floor(Math.random() * Merch.merchObjects.length);
    var randomThird = Math.floor(Math.random() * Merch.merchObjects.length);

    console.log('duplicate detected, will display once, problem if displayed more than once');
    console.log('first', randomFirst);
    console.log('second', randomSecond);
    console.log('third', randomThird);

  } while (randomFirst === randomSecond
  || Merch.previouslyViewed.includes(randomFirst)
  || Merch.previouslyViewed.includes(randomSecond)
  || Merch.previouslyViewed.includes(randomThird));

  /* previous random number generator, might no longer need

  var randomNum = Math.random() * Merch.merchObjects.length;
  var wholeRandomNumber = Math.floor(randomNum);
  var singleRandomMerchObject = Merch.merchObjects[wholeRandomNumber];
  */

  // set the src attribute of the img element
  Merch.imgElement.src = Merch.filepath;

};

Merch.imgElement.addEventListener('click', Merch.randomMerch);

Merch.randomMerch();