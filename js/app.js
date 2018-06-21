'use strict';

//an array that holds the images to be dislayed on screen from the merchObjects
Merch.merchObjects = [];

// an array to store all the names of each individual item

//it's job is to count to 25

Merch.clickTracker = 0;

Merch.catalog = [];

//an array to hold the voting record
Merch.totalVotes = [];

// an array to keep track of the Merch that has been shown on screen

Merch.previouslyViewed = [];

// access to the element, section and unordered list all by ID from the DOM

Merch.imgElement = document.getElementById('merch-pic');
Merch.ulEl = document.getElementById('voteCounts');
Merch.sectionEl = document.getElementById('merch-display');
Merch.firstEl = document.getElementById('selectionOne');
Merch.secondEl = document.getElementById('selectionTwo');
Merch.thirdEl = document.getElementById('selectionThree');



// constructor to make merchandise instances
function Merch(name, filepath) {
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
  console.log('randomMerch is running');
  // random whole number generator, between 0 and the length of the array
  do {
    var randomFirst = Math.floor(Math.random() * Merch.merchObjects.length);
    var randomSecond = Math.floor(Math.random() * Merch.merchObjects.length);
    var randomThird = Math.floor(Math.random() * Merch.merchObjects.length);

    // console.log('duplicate detected, will display once, problem if displayed more than once');
    // console.log('first', randomFirst);
    // console.log('second', randomSecond);
    // console.log('third', randomThird);

  } while (randomFirst === randomSecond || randomFirst === randomThird || randomSecond === randomThird
  || Merch.previouslyViewed.includes(randomFirst)
  || Merch.previouslyViewed.includes(randomSecond)
  || Merch.previouslyViewed.includes(randomThird));

  // console.log(Merch.merchObjects[randomFirst].filepath);

  /* previous random number generator, might no longer need

  var randomNum = Math.random() * Merch.merchObjects.length;
  var wholeRandomNumber = Math.floor(randomNum);
  var singleRandomMerchObject = Merch.merchObjects[wholeRandomNumber];
  */

  // set the src and alt attributes of the img element
  Merch.firstEl.src = Merch.merchObjects[randomFirst].filepath;
  Merch.firstEl.alt = Merch.merchObjects[randomFirst].name;
  Merch.secondEl.src = Merch.merchObjects[randomSecond].filepath;
  Merch.secondEl.alt = Merch.merchObjects[randomSecond].name;
  Merch.thirdEl.src = Merch.merchObjects[randomThird].filepath;
  Merch.thirdEl.alt = Merch.merchObjects[randomThird].name;

  Merch.previouslyViewed[0] = randomFirst;
  Merch.previouslyViewed[1] = randomSecond;
  Merch.previouslyViewed[2] = randomThird;

  Merch.merchObjects[randomFirst].votes++;
  Merch.merchObjects[randomSecond].votes++;
  Merch.merchObjects[randomThird].votes++;
  Merch.merchObjects[randomFirst].timesShown++;
  Merch.merchObjects[randomSecond].timesShown++;
  Merch.merchObjects[randomThird].timesShown++;

};

Merch.showList = function() {
  for(var i = 0; i < Merch.merchObjects.length; i++) {
    var liEl = document.createElement('li');
    console.log(Merch.merchObjects[i]);
    liEl.textContent = `${Merch.merchObjects[i].name} has recieved ${Merch.merchObjects[i].votes} votes.`;
    Merch.ulEl.appendChild(liEl);
  }
};

// Add up the votes
Merch.updateVotes = function() {
  for(var i = 0; i < Merch.merchObjects.length; i++) {
    Merch.totalVotes[i] = Merch.merchObjects[i].votes;
    Merch.catalog[i] = Merch.merchObjects[i].name;
  }
  console.log(Merch.totalVotes);
};

Merch.clicker = function(event) {
  console.log('clicked');
  Merch.clickTracker +=1;


  if(Merch.clickTracker > 24) {
    Merch.sectionEl.removeEventListener('click', Merch.clicker);
    //display results
    Merch.updateVotes();
    Merch.showList();
  } else {
    console.log('event.target.alt',event.target.alt);
    for(var i = 0; i < Merch.merchObjects.length; i++) {
      if (event.target.alt === Merch.merchObjects[i].name) {
        Merch.merchObjects.votes +=1;
      }
    }
    Merch.randomMerch();
  }
};

Merch.sectionEl.addEventListener('click', Merch.clicker);

Merch.randomMerch();

// method to render the chart on the screen
Merch.renderChart = function() {
  var context = document.getElementById('myChart').getContext('2d');

  var chartColors = ['#bb070e', '#ffe63a', '#0099f7', '#fff'];

  var merchChart = new Chart(context, { // eslint-disable-line
    type: 'bar',
    data : {
      labels: Merch.catalog,
      datasets: [{
        label: 'Clicks Per Item',
        data: Merch.totalVotes,
        backgroundColors: chartColors,
        // backgroundColors: ['red','green','blue', '#fff'],
      }],
    },
    options: {
      scales: {
        yAxes: [{
          tick: {
            beginAtZero: true,
          }
        }]
      }
    }
  });
};

Merch.renderChart();