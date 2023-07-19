let stone = null;

// this function is called when a row is clicked.
// Open your inspector tool to see what is being captured and can be used.
const selectRow = (row) => {
  const currentRow = row.getAttribute("data-row");
  // console.log(`CurrentRow: ${currentRow}`);
  // console.log(`row: `, row);
  console.log(`row.id will get passed to next function: ${row.id}`);
  if (stone === null) {
    pickUpStone(row.id);
  } else {

    dropStone(row.id, stone);
  }
};

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
const pickUpStone = (rowID) => {
  const selectedRow = document.getElementById(rowID);
  // console.log(selectedRow);
  // console.log(selectedRow.lastElementChild);
  if (selectedRow.lastElementChild) {
    stone = selectedRow.removeChild(selectedRow.lastElementChild);
    console.log(stone);
    // console.log(`after removal, last element: `, selectedRow.lastElementChild);
  } else {
    console.log(`no stones here`);
  }
};


const dropStone = (rowID, selectedStone) => {
  
  const currentRowElement = document.getElementById(rowID);
  // console.log(`selectedStone: ` + selectedStone.id);
  // console.log(!currentRowElement.lastElementChild);
  if (!currentRowElement.lastElementChild) {
    currentRowElement.appendChild(selectedStone);
  } else if (
    Number(currentRowElement.lastElementChild.id) > Number(selectedStone.id)
  ) {
    console.log(`in number comparison area`);
    document.getElementById(rowID).appendChild(selectedStone);
  } else {
    console.log(`invalid move`);
    return;
  }
  // check for win condition
  // elements start on bottom row, so check middle and top rows for win condition
  // use document.getElementById("top-row").childElementCount;
  const topCount = document.getElementById("top-row").childElementCount;
  const midCount = document.getElementById("middle-row").childElementCount;
  // console.log(topCount, typeof topCount);
  // console.log(midCount, typeof midCount);
  if (topCount === 4 || midCount === 4) {
    console.log(`YOU WON!!!!`);
    won();
  }

  stone = null;
};

function won() {
  window.alert(`Congratulations, you won!!!`);
}

// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.