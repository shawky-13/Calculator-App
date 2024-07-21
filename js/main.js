// the logic of the calc app
// select the numbers from the calc app
let numbers = document.querySelectorAll(".num");
// create an empty array that i push the number that i clicked on it inside the array
let numArray = [];
// select the symbols from the calc app
let symbols = document.querySelectorAll(".symbol");
// select the screen div
let screen = document.querySelector(".screen");
// select the Reset button
let resetBtn = document.querySelector(".reset");
// select the delete button
let delBtn = document.querySelector(".delete");
// select the equal button
let equalBtn = document.querySelector(".equal");

// looping on the numbers
numbers.forEach((num) => {
  num.addEventListener("click", (e) => {
    numArray.push(+e.target.textContent);
    screen.textContent = numArray.join("");
  });
});
// looping on the symbols
symbols.forEach((symbol) => {
  symbol.addEventListener("click", (e) => {
    numArray.push(e.target.textContent);
    screen.textContent = numArray.join("");
  });
});
// delete all number from the screen div
resetBtn.addEventListener("click", () => {
  screen.textContent = "";
  numArray = [];
});
// delete one by one  number from the screen div using del button
delBtn.addEventListener("click", () => {
  numArray.pop();
  screen.textContent = numArray.join("");
});
// equal operation
equalBtn.addEventListener("click", () => {
  addition();
  subtraction();
  multiplication();
  division();
  numArray = [];
});

// addition function
function addition() {
  let operation1;
  let operation2;
  let symbol = [];
  let first;
  let second;
  let sum;
  operation1 = numArray.slice(0, numArray.indexOf("+"));
  operation2 = numArray.slice(numArray.indexOf("+") + 1, numArray.length);
  first = +operation1.join("");
  second = +operation2.join("");
  numArray.forEach((num) => {
    if (typeof num == "string") {
      symbol.push(num);
    }
    if (symbol[0] == "+") {
      sum = first + second;
      screen.textContent = sum;
    }
    // ما شاء الله لا قوه الا بالله
  });
}
// subtraction function
function subtraction() {
  let operation1;
  let operation2;
  let symbol = [];
  let first;
  let second;
  let sum;
  operation1 = numArray.slice(0, numArray.indexOf("-"));
  operation2 = numArray.slice(numArray.indexOf("-") + 1, numArray.length);
  first = +operation1.join("");
  second = +operation2.join("");
  numArray.forEach((num) => {
    if (typeof num == "string") {
      symbol.push(num);
    }
    if (symbol[0] == "-") {
      sum = first - second;
      screen.textContent = sum;
    }
    // ما شاء الله لا قوه الا بالله
  });
}
// multiplication function
function multiplication() {
  let operation1;
  let operation2;
  let symbol = [];
  let first;
  let second;
  let sum;
  operation1 = numArray.slice(0, numArray.indexOf("x"));
  operation2 = numArray.slice(numArray.indexOf("x") + 1, numArray.length);
  first = +operation1.join("");
  second = +operation2.join("");
  numArray.forEach((num) => {
    if (typeof num == "string") {
      symbol.push(num);
    }
    if (symbol[0] == "x") {
      sum = first * second;
      screen.textContent = sum;
    }
    // ما شاء الله لا قوه الا بالله
  });
}
// division function
function division() {
  let operation1;
  let operation2;
  let symbol = [];
  let first;
  let second;
  let sum;
  operation1 = numArray.slice(0, numArray.indexOf("/"));
  operation2 = numArray.slice(numArray.indexOf("/") + 1, numArray.length);
  first = +operation1.join("");
  second = +operation2.join("");
  numArray.forEach((num) => {
    if (typeof num == "string") {
      symbol.push(num);
    }
    if (symbol[0] == "/") {
      sum = first / second;
      screen.textContent = sum;
    }
    // ما شاء الله لا قوه الا بالله
  });
}
