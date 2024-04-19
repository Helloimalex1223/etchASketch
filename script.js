let sqWindow = document.querySelector(".screen");

//Selects the button to get user input
let sqNumber = document.querySelector(".numberSquares");

let square;

//gets user input to see how many squares to create
sqNumber.addEventListener("click", () =>
{
    let numInput = prompt("How many squares in a row/column do you want to create?");
    numberOfSquares(numInput);
})


//creates a certain number of squares based on the number the user enters
function numberOfSquares(number)
{
    if(number > 100)
    {
        number = 100;
    }

    //clear existing squares if any relevant. Don't want to overflow the screen element.
    clearSquares();
    for(let i = 0; i < (number * number); i++)
    {
        //creates a square in the DOM
        square = document.createElement("div");
        square.classList.add("sq");

        //add class to change square background color on mouseover
        square.addEventListener("click", function(e) {
            e.target.style.backgroundColor = "blue";
        })
        
        //calculates the height and width of a single square based on the screen height and width.
        square.style.height =  "calc(600px / " + number + ")";
        square.style.width =  "calc(600px / " + number + ")";
        sqWindow.appendChild(square);
        
    }
}

let clearBtn = document.querySelector(".clearSquares");

clearBtn.addEventListener("click", () =>
{
    clearSquares();
})


//iterates through child nodes on the parent node. If a child node exists, remove it.
function clearSquares()
{
    while(sqWindow.hasChildNodes())
    {
        sqWindow.removeChild(sqWindow.firstChild);
    };
}

function blueSq()
{
    square.style.backgroundColor = "blue";
}
