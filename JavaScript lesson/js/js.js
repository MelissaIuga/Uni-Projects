/**
 * file: js/js.js
 * purpose: Behaviors
 **/

console.log('All systems running')

/* This is how you make a comment.
It can fill out more than one line.
*/

//I am a one-liner comment.


/* variables and how to create them.
They store data. 
*/
let myCow = "Milka";
var anotherCow = "Alaska";
let myBook = "Long book name's here";
const grandma = "Bertie";

console.log(myBook+ " " + myCow + " " + grandma);


//numbers

let lucky = "7";
let disaster = "126";
const noChange = "333";
lucky = "126";

//you can change the variables along the way

console.log("Addition result is" + " " + lucky + disaster);

//booleans: true or false

const santaexists = true;
console.log(santaexists);

//booleans: used to compare things

console.log( lucky == disaster );

//write some html id

hi.innerHTML = "<p>" + myBook + "<p>";

//several lines in a variable

let pizza = `
<article>
<h2> Gorgonzola</h2>
<img src="images/margarita.webp" alt="Gorgonzola">
<p> This is a wonderful...</p>
</article>
`

//inject this into #hi

hi.innerHTML = pizza;

//a function is a series of instructions or orders for the computer

let boom = function(){
    alert("We use cookies and we track all you do. Consent?");
    console.log("Cookie info fired off");
    return true;
}


