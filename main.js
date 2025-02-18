"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// An object that represents the three stacks of Towers of Hanoi;
// * each key is an array of Numbers:
// * A is the far-left,
// * B is the middle,
// * C is the far-right stack
// * Each number represents the largest to smallest tokens:
// * 4 is the largest,
// * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: [],
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};
// Accesses properties of the object, which are holding our numbers

// Next, what do you think this function should do?
// pop element from one array and push to another.
const movePiece = (startStack, endStack) => {
  const piece = stacks[startStack].pop();
  stacks[endStack].push(piece);
};

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
/*
if endStack is empty
// it is a valid move
else (if endStack is not empty):
// if endStack's last element is greater than current element
// // it is a valid move
// else
// // it is not a valid move.
*/
const isLegal = (startStack, endStack) => {
  const sStack = stacks[startStack];
  const eStack = stacks[endStack];
  // ^^ brackets get unweildy, needs this abstraction
  if (eStack.length === 0) {
    return true;
  } else {
    if (eStack[eStack.length - 1] > sStack[sStack.length - 1]) {
      return true;
    } else {
      console.log(`-----INVALID MOVE!!!!-----`);
      return false;
    }
  }
};

// What is a win in Towers of Hanoi? When should this function run?
/*
check for win after a valid move has occurred
[1,2,3,4] == [1,2,3,4] returns false
  -same with ===
  -(something, something, these aren't equivalent object references)
as long as all moves are valid, can check b.length === 4 || c.length === 4
*/
const checkForWin = () => {
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    console.log(`You've won!!`);
    return true;
  } else {
    return false;
  }
};

// When is this function called? What should it do with its argument?
/*
In the terminal, rl.question(...) will supply the arguments.
Using args, is this a valid move?
  yes:
    then perform the actual movement
    lastly check for win
  no: 
    escape
*/
const towersOfHanoi = (startStack, endStack) => {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
    // return true;
  }
};

const getPrompt = () => {
  printStacks();
  rl.question("start stack: ", (startStack) => {
    rl.question("end stack: ", (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
};

// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: [],
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: [],
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}