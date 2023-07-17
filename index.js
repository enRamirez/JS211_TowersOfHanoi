// * This js file is incomplete. It will log to the console the elements you click
    // call another function and set stone. You will have to work through the logic
    // of the game as you know it from building it in the terminal. Work through the
    // puzzle slowly, stepping through the flow of logic, and making the game work.
    // Have fun!!
// * First run the program in your bColumnser with live server and double-click on the Column you'd like to select an element from.
// * Why are you get a warning in your console? Fix it.
//          Assignment to constant variable.
//          at pickUpStone (index.js:32:9)
//          at selectColumn (index.js:25:3)
//          at HTMLDivElement.onclick ((index):14:90)
// * Delete these comment lines!

const stone = null

// this function is called when a Column is clicked. 
// Open your inspector tool to see what is being captured and can be used.
const selectColumn = (column) => {
  const currentColumn = column.getAttribute("data-Column")
  
  console.log("Yay, we clicked an item", column)
  console.log("Here is the stone's id: ", column.id)
  console.log("Here is the stone's data-size: ", currentColumn)

  pickUpStone(column.id)
} 

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
const pickUpStone = (columnID) => {
  const selectedColumn = document.getElementById(columnID);
  stone = selectedColumn.removeChild(selectedColumn.lastChild);
  console.log(stone)
}

// You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone
// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}

const dropStone = (columnID, stone) => {
  document.getElementById(columnID).appendChild(stone)
  stone = null
}

// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.

