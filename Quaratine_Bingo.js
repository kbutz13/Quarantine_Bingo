
var boardItems = {
Andrea: ['Andrea: Drunk with power', ' Andrea: Drunk zoom calls people into beer buggy'],
Kelly: ['Kelly: Is accused of being drunk ', 'Kelly: Yells at her cats '],
Matt: ['Matt: Frosty makes an apperance', 'Matt: Mentions British bakeoff'],
Nick: ['Nick: Wearing sunglasses', 'Nick: Is Hitler'],
Richard: ['Richard: Is working when everyone else is candy breaking', 'Richard: Wearing Bears gear'],
Rick: ['Rick: Is not around because sleep schedule is off', 'Rick: Says something to be added to his Quote tool'],
Joe: ['Joe: Is wearing a stylish shirt', 'Joe: Is at his GF house'],
Kevin: ['Kevin: Is asked to show his doggos', 'Kevin: Everything is blamed on him'],
Joel: ['Joel: Is wearing a blanket', 'Joel: Hair is longer than yours'],
Joven: ['Joven: Offers to help someone', 'Joven: Has an outrageous virtual background'],
Ryan: ['Ryan: Does not have his camera on', 'Ryan: Is working when everyone else is candy breaking'],
Sam: ['Sam: Asks to shadow someone', 'Sam: Is probably like what is wrong with everyone'],
Eric: ['Eric: Mentions his hair', 'Eric: Is trying to lie but we all know he is lying'],
Maggie: ['Maggie: Has tropical virtual backdrop', 'Maggie: Has actual tropical backdrop'],
}


var {Andrea, Kelly, Matt, Nick, Richard, Rick, Joe, Kevin, Joel, Joven, Ryan, Sam, Eric, Maggie } = boardItems;
//this deconstructs the object into making the properties accesssible variables

var allObjectPropertyArrays = Andrea.concat(Kelly, Matt, Nick, Richard, Rick, Joe, Kevin, Joel, Joven, Ryan, Sam, Eric, Maggie);
//this concatenates all of the properties arrays into one big giants array


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function fillBoard(array) {
    shuffleArray(array);
    array.forEach(function(arrayItem, i) {
        var element = document.getElementById("box" + (i + 1));
        if (element) {
          element.innerHTML = '<div class="marker"> <p class="bingoText">' + arrayItem + '</p> </div>';
        }
      });
} 
      
// same only refactored ^^^ OG is below

// for(let i=0; i<array.length; i++){
//         var element = document.getElementById("box"+(i+1));
//         if(element) {
//             element.innerHTML = array[i] ; 
//         } 
      //     } 


//--------------------------------------------------------------------------------------





    // function getRandomValueFromObjectPropertyArrays(array) {
//     var arrayLength = array.length;
//     var randomIndex = Math.floor(Math.random()*arrayLength) ;
//     return array[randomIndex];
//   }
// // this will pull a random value from the array of all the objects properties arrays eventually 


// var element = document.getElementById("box1");
// element.innerHTML = item;

// }

// while length of array is > 0
// get random item, 
// add random item to box on page 
// remove item from array - so it doesnt get same random element to put in box 
// 




// function fillBoard() {

// var keys = Object.keys(boardItems); // made an array of the object properties
// var type = pick(keys); // made a variable to pick a property (pick) of the 'key', aka the object properties array

// var items = boardItems[type]; // made array to hold the choosen object property array values
// var item = pick(items); // made variable to pick an item out of the properties array

// //now need to pick random item out of array 'item'

// var value = item[Math.floor(Math.random() * item.length)]; 
// }


// function fillBoard() {
// var {Andrea, Kelly, Matt, Nick, Richard, Rick, Joe, Kevin, Joel, Joven, Ryan, Sam, Eric, Maggie} = boardItems;
// // above, I believe we made each of the properties of the object into accessible arrays


// var element = document.getElementById("box1p");
// var value = item[Math.floor(Math.random() * item.length)];
// element.innerHTML = value; }


//______________ this below works but brings back undefined
// function fillBoard() {
// var randomProperty = function (boardItems) {
//     var keys = Object.keys(boardItems);
//     return boardItems[keys[ keys.length * Math.random() << 0]];
// }  //creating a variable that will hold a random property name from the object

// var value = fillBoard[Math.floor(Math.random() * randomProperty.length)];
// //creating a variable that will hold random value of the property array picked in the function above
// var element = document.getElementById("box1p");
// element.innerHTML = value; }

// _________________

//OG solution:

// function fillBoard() {
//     var element = document.getElementById("box1p");
//     element.innerHTML = boardItems.Andrea[1];

//     var element = document.getElementById("box2p");
//     element.innerHTML = boardItems.Kelly[1];

//     var element = document.getElementById("box3p");
//     element.innerHTML = boardItems.Matt[1];

//     var element = document.getElementById("box4p");
//     element.innerHTML = boardItems.Nick[1];

//     var element = document.getElementById("box5p");
//     element.innerHTML = boardItems.Richard[1];

//     var element = document.getElementById("box6p");
//     element.innerHTML = boardItems.Rick[1];

//     var element = document.getElementById("box7p");
//     element.innerHTML = boardItems.Joe[1];

//     var element = document.getElementById("box8p");
//     element.innerHTML = boardItems.Kevin[1];

//     var element = document.getElementById("box9p");
//     element.innerHTML = boardItems.Joel[1];

//     var element = document.getElementById("box10p");
//     element.innerHTML = boardItems.Joven[1];

//     var element = document.getElementById("box11p");
//     element.innerHTML = boardItems.Ryan[1];

//     var element = document.getElementById("box12p");
//     element.innerHTML = boardItems.Sam[1];

//     var element = document.getElementById("box13p");
//     element.innerHTML = boardItems.Eric[1];

//     var element = document.getElementById("box14p");
//     element.innerHTML = boardItems.Maggie[1];

//     var element = document.getElementById("box15p");
//     element.innerHTML = boardItems.Andrea[0];

//     var element = document.getElementById("box16p");
//     element.innerHTML = boardItems.Kelly[0];

//     var element = document.getElementById("box17p");
//     element.innerHTML = boardItems.Matt[0];

//     var element = document.getElementById("box18p");
//     element.innerHTML = boardItems.Nick[0];

//     var element = document.getElementById("box19p");
//     element.innerHTML = boardItems.Richard[0];

//     var element = document.getElementById("box20p");
//     element.innerHTML = boardItems.Rick[0];

//     var element = document.getElementById("box21p");
//     element.innerHTML = boardItems.Joe[0];

//     var element = document.getElementById("box22p");
//     element.innerHTML = boardItems.Kevin[0];

//     var element = document.getElementById("box23p");
//     element.innerHTML = boardItems.Joel[0];

//     var element = document.getElementById("box24p");
//     element.innerHTML = boardItems.Joven[0];

//     var element = document.getElementById("box25p");
//     element.innerHTML = boardItems.Ryan[0];


// // }



