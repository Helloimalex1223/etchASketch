//selects the screen class
let sqWindow = document.querySelector(".screen");


//creates a square in the DOM
let square = document.createElement("div");

//Selects the button to get user input
let sqNumber = document.querySelector(".numberSquares");

sqNumber.addEventListener("click", () =>
{
    let numInput = prompt("How many squares in a row/column do you want to create?");

    numberOfSquares(numInput);

})


//creates a certain number of squares based on the number the user enters
function numberOfSquares(number)
{
    console.log(number);
}