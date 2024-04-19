let sqWindow = document.querySelector(".screen");
let sqNumber = document.querySelector(".numberSquares");
let square;
let numInput;

//selects color picker. When the user changes a color, the currentColor value changes
let colorPicker = document.querySelector("#colors");
let currentColor;

//sets initial grid
function initialGrid()
{
    numberOfSquares(5);
}

initialGrid();


colorPicker.addEventListener("input", (e) =>
{
    currentColor = colorPicker.value;
})

//gets user input to see how many squares to create
sqNumber.addEventListener("click", () =>
{
    numInput = prompt("How many squares in a row/column do you want to create?");
    numberOfSquares(numInput);
})


//creates a certain number of squares based on the number the user enters
function numberOfSquares(number)
{
    if(number > 100)
    {
        number = 100;
    }

    removeSquares();


    for(let i = 0; i < (number * number); i++)
    {
        //creates a square
        square = document.createElement("div");
        square.classList.add("sq");

        //Changes square background color on mouseover
        square.addEventListener("mouseover", function(e) {
            if(currentColor == undefined)
            {
                e.target.style.backgroundColor = "black";
            }
            else
            {
                e.target.style.backgroundColor = currentColor;   
            }
        })
        
        //calculates  height and width of a single square based on screen height/width.
        square.style.height =  "calc(600px / " + number + ")";
        square.style.width =  "calc(600px / " + number + ")";
        sqWindow.appendChild(square);
        
    }
}

let clearBtn = document.querySelector(".clearSquares");

clearBtn.addEventListener("click", () =>
{
    clearSquareColor();
})


//iterates through child nodes on parent. Removes child nodes styling and creates a new grid with same number of squares
function removeSquares()
{
    while(sqWindow.hasChildNodes())
    {
        sqWindow.removeChild(sqWindow.firstChild);
    };
}


//iterates through each square and clears the backgroundColor style
function clearSquareColor()
{
    let sqClassList = document.getElementsByClassName("sq");
    for(let index = 0; index < sqClassList.length; index++)
    {
        sqClassList[index].style.backgroundColor = "white";
    }
}
