
var players = ['X', 'O'];
var box = document.querySelectorAll('.box')
var currentPlayer = 'X';



//looping through each box one at a time and adding an event listener to it
for(let i = 1; i <= 9; i++) 
{
	let box = document.getElementById('box' + i); 

    box.addEventListener('click', function() {clickedBox(this);});
}

var numberofclicks = 0;
function clickedBox(clickedBox) 
{
    ++numberofclicks;
    console.log(numberofclicks);
    var clickedBoxId = clickedBox.id;
    //remove the event listener when a box is clicked
    document.getElementById(clickedBoxId).removeEventListener("click", function() {clickedBox(this);}); //the mini-function clickedBox is to pass the this element in the function
    console.log(clickedBoxId)
    //change box letter to the same as the current player
    document.getElementById(clickedBoxId).innerText = currentPlayer;
    //change currentPlayer
    checkWin();

}



function changeTurn()
{
    if (currentPlayer ==='X') 
    {
        currentPlayer = 'O';
    } 
    else if (currentPlayer ==='O') 
    {
        currentPlayer = 'X';
    }
    //alert("It's Player " + currentPlayer +"'s Turn");
     //checkWin();
}


var winner = "none";

function checkWin()
{
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');
var box9 = document.getElementById('box9');

//These first two are diagonal wins
    if (box1.innerText === "X" && box5.innerText === "X"  && box9.innerText === "X" || box1.innerText === "O" && box5.innerText === "O"  && box9.innerText === "O")
    {
        var winner = box1.innerText;
        alert("Player " + winner + " wins!")
    }
    
    else if (box3.innerText === "X" && box5.innerText === "X"  && box7.innerText === "X" || box3.innerText === "O" && box5.innerText === "O"  && box7.innerText === "O")
    {
    var winner = box3.innerText;
    alert("Player " + winner + " wins!")
    }

//The next 3 are horizontal wins
    else if (box1.innerText === "X" && box4.innerText === "X"  && box7.innerText === "X" || box1.innerText === "O" && box4.innerText === "O"  && box7.innerText === "O")
    {
    var winner = box1.innerText;
    alert("Player " + winner + " wins!")
    
    }

    else if (box2.innerText === "X" && box5.innerText === "X"  && box8.innerText === "X" || box2.innerText === "O" && box5.innerText === "O"  && box8.innerText === "O")
    {
    var winner = box2.innerText;
    alert("Player " + winner + " wins!")
    
    }

    else if (box3.innerText === "X" && box6.innerText === "X"  && box9.innerText === "X" || box3.innerText === "O" && box6.innerText === "O"  && box9.innerText === "O")
    {
    var winner = box3.innerText;
    alert("Player " + winner + " wins!")
    
    }

//The next 3 are vertical wins
    else if (box1.innerText === "X" && box2.innerText === "X"  && box3.innerText === "X" || box1.innerText === "O" && box2.innerText === "O"  && box3.innerText === "O")
    {
    var winner = box1.innerText;
    alert("Player " + winner + " wins!")
    
    }
    
    else if (box4.innerText === "X" && box5.innerText === "X"  && box6.innerText === "X" || box4.innerText === "O" && box5.innerText === "O"  && box6.innerText === "O")
    {
    var winner = box4.innerText;
    alert("Player " + winner + " wins!")
    
    }
    
    else if (box7.innerText === "X" && box8.innerText === "X"  && box9.innerText === "X" || box7.innerText === "O" && box8.innerText === "O"  && box9.innerText === "O")
    {
    var winner = box7.innerText;
    alert("Player " + winner + " wins!")
    
    }

    else if (numberofclicks === 9)
    {
        alert("It's a tie!")
    }

    else
    {
    changeTurn();
    }
    console.log(winner);
}


//checkTie
//if winner = none, then its a tie

var reset = document.getElementById("reset");

reset.addEventListener('click', Reset);
function Reset()
{
    currentPlayer = "X"
    numberofclicks = 0;
    for(let i = 1; i <= 9; i++) 
    {
    let box = document.getElementById('box' + i); 
    box.innerText = "";
    }
}

