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
 * const doubleMedian = document.querySelectorAll("#double-d6-rolls-median");
 doubleMedian[0].textContent='test';
 doubleMedian.appendChild(document.createTextNode('Median'));

 const doubleMode = document.querySelectorAll("#double-d6-rolls-mode");
 doubleMode[0].textContent=doubleSixes;
 doubleMode.appendChild(document.createTextNode('Mode')); *
 *******************/
//adding values

const first = document.querySelectorAll("#double-d6-rolls-median");
first[0].textContent=doubleSixes;

const second = document.querySelectorAll("#double-d6-rolls-mean");
second[0].textContent=doubleSixes;

const third = document.querySelectorAll("#double-d6-rolls-mode");
third[0].textContent=doubleSixes;



/*******************
 * EVENT LISTENERS *
 *******************/

 const dice4 = document.querySelector("#d20-roll")
 dice4.addEventListener('click', function(event) {
     dice4.style.backgroundColor = "red"
   })


const dice3 = document.querySelector("#d12-roll")
   dice3.addEventListener('click', function(event) {
       dice3.style.backgroundColor = "blue"
     })

const dice2 = document.querySelector("#double-d6-roll-1")
const dice1 = document.querySelector("#double-d6-roll-2")
     dice2.addEventListener('click', function(event) {
         dice2.style.backgroundColor = "black"
         dice1.style.backgroundColor = "black"
       })

const dice = document.querySelector("#d6-roll")
          dice.addEventListener('click', function(event) {
          dice.style.backgroundColor = "black"

})



/******************
 * RESET FUNCTION *
 ******************/

   const buttons = document.querySelectorAll("button")
for (const button of buttons) {
  button.addEventListener('click', function(event) {

    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];

    first[0].textContent=doubleSixes;
    second[0].textContent=doubleSixes;
    third[0].textContent=doubleSixes;


}
  )
}


/****************
 * MATH SECTION *
 ****************/
