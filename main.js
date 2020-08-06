/**********
 * DATA *
 **********/

let sixes = [6,7,8,8];
let doubleSixes = [22,5,4];
let twelves = [];
let twenties = [];



/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);

    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 *  *
 *******************/
//Queries
const dice = document.querySelector("#d6-roll")
const buttons = document.querySelectorAll("button")
const dice4 = document.querySelector("#d20-roll")
const dice3 = document.querySelector("#d12-roll")
const dice2 = document.querySelector("#double-d6-roll-1")


const medianDouble6 = document.querySelectorAll("#double-d6-rolls-median");
const meanDouble6 = document.querySelectorAll("#double-d6-rolls-mean");
const modeDouble6 = document.querySelectorAll("#double-d6-rolls-mode");
//
const medianD6 = document.querySelectorAll("#d6-rolls-median");
const meanD6 = document.querySelectorAll("#d6-rolls-mean");
const modeD6 = document.querySelectorAll("#d6-rolls-mode");

//
const medianD12 = document.querySelectorAll("#d12-rolls-mean");
const meanD12 = document.querySelectorAll("#d12-rolls-median");
const modeD12 = document.querySelectorAll("#d12-rolls-mode");
//
const medianD20 = document.querySelectorAll("#d20-rolls-mean");
const meanD20 = document.querySelectorAll("#d20-rolls-median");
const modeD20 = document.querySelectorAll("#d20-rolls-mode");

medianD20[0].textContent=doubleSixes;
meanD20[0].textContent=doubleSixes;
modeD20[0].textContent=doubleSixes;

modeDouble6[0].textContent=doubleSixes;
meanDouble6[0].textContent=doubleSixes;
medianDouble6[0].textContent=doubleSixes;

modeD6[0].textContent=doubleSixes;
meanD6[0].textContent=doubleSixes;
medianD6[0].textContent=doubleSixes;

modeD12[0].textContent=doubleSixes;
meanD12[0].textContent=doubleSixes;
medianD12[0].textContent=doubleSixes;


/*******************
 * EVENT LISTENERS *
 *******************/


 dice4.addEventListener('click', function(event) {
     dice4.style.backgroundColor = "red"
   })


   dice3.addEventListener('click', function(event) {
       dice3.style.backgroundColor = "blue"
     })

const dice1 = document.querySelector("#double-d6-roll-2")
     dice2.addEventListener('click', function(event) {
         dice2.style.backgroundColor = "black"
         dice1.style.backgroundColor = "black"
       })

          dice.addEventListener('click', function(event) {
          dice.style.backgroundColor = "black"

})



/******************
 * RESET FUNCTION *
 ******************/

for (const button of buttons) {
  button.addEventListener('click', function(event) {

    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];

    medianD20[0].textContent=doubleSixes;
    meanD20[0].textContent=doubleSixes;
    modeD20[0].textContent=doubleSixes;

    modeDouble6[0].textContent=doubleSixes;
    meanDouble6[0].textContent=doubleSixes;
    medianDouble6[0].textContent=doubleSixes;

    modeD6[0].textContent=doubleSixes;
    meanD6[0].textContent=doubleSixes;
    medianD6[0].textContent=doubleSixes;

    modeD12[0].textContent=doubleSixes;
    meanD12[0].textContent=doubleSixes;
    medianD12[0].textContent=doubleSixes;

}
  )
}


/****************
 * MATH SECTION *
 ****************/
