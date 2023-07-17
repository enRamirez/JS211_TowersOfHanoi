let stone = null

// this function is called when a Column is clicked. 
// Open your inspector tool to see what is being captured and can be used.
const selectColumn = (column) => {
  const currentColumn = column.getAttribute("data-Column")
  
  console.log("Yay, we clicked an item", column)
  console.log("Here is the stone's id: ", column.id)
  console.log("Here is the stone's data-size: ", currentColumn)
  // if i have a stone in my hand already, i must drop it first
  // if my hand is empty, then i will need to pick up a stone
  if (!stone) {
      pickUpStone(column.id)
    } else {
      dropStone(column.id)
    }
} 

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
const pickUpStone = (columnID) => {
  const selectedColumn = document.getElementById(columnID);
  stone = selectedColumn.lastElementChild;
  selectedColumn.removeChild(stone);
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

