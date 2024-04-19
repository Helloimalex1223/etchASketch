let sqWindow = document.querySelector(".screen");

//Selects the button to get user input
let sqNumber = document.querySelector(".numberSquares");

//gets user input to see how many squares to create
sqNumber.addEventListener("click", () =>
{
    let numInput = prompt("How many squares in a row/column do you want to create?");

    numberOfSquares(numInput);

})


//creates a certain number of squares based on the number the user enters
function numberOfSquares(number)
{
    for(let i = 0; i < number; i++)
    {
        //creates a square in the DOM
        let square = document.createElement("div");
        square.classList.add("sq");
        sqWindow.appendChild(square);
    }
}