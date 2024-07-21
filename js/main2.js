function appendToScreen(value) {
  const screen = document.getElementById("screen");
  screen.innerText += value;
}

function clearScreen() {
  const screen = document.getElementById("screen");
  screen.innerText = "";
}

function backspace() {
  const screen = document.getElementById("screen");
  screen.innerText = screen.innerText.slice(0, -1);
}

function calculate() {
  const screen = document.getElementById("screen");
  try {
    screen.innerText = eval(screen.innerText);
  } catch {
    screen.innerText = "Error";
  }
}

// select the span of themes
let spanTheme = document.querySelectorAll(".theme-nums span");
// changing the themes
// add active class to the theme spans
spanTheme.forEach((span) => {
  span.addEventListener("click", (e) => {
    // remove active class from all spans
    spanTheme.forEach((span) => {
      span.classList.remove("active");
    });
    // add the active class to the clicked span
    e.target.classList.add("active");
    // toggle the themes
    if (spanTheme[0].classList.contains("active")) {
      // change the body background
      document.body.style.backgroundColor = " hsl(222, 26%, 31%)";
      document.querySelector(".calc-app").style.color = "hsl(0, 0%, 100%)";
      // change the color of the head
      document.querySelector(".theme").style.backgroundColor =
        "hsl(223, 31%, 20%)";
      // change the background of symbols
      document.querySelector(".symbols").style.backgroundColor =
        "hsl(223, 31%, 20%)";
      // change the background of screen
      document.querySelector(".screen").style.backgroundColor =
        "hsl(224, 36%, 15%)";
      // change the color of screen
      document.querySelector(".screen").style.color = " hsl(0, 0%, 100%)";
      // change the color of the
      document.querySelectorAll(".num").forEach((num) => {
        num.style.color = "hsl(225, 21%, 49%)";
        num.style.boxShadow = "0px 1px 0px 1px hsl(224, 28%, 35%)";
        num.style.backgroundColor = " hsl(0, 0%, 100%)";
      });
      // change the color of the symbols
      document.querySelectorAll(".symbol").forEach((num) => {
        num.style.color = "hsl(225, 21%, 49%)";
        num.style.boxShadow = "0px 1px 0px 1px hsl(224, 28%, 35 %)";
        num.style.backgroundColor = " hsl(0, 0%, 100%)";
      });
      // change the color & boxshadow of the dot symbol
      document.querySelector(".dot").style.color = "hsl(225, 21%, 49%)";
      document.querySelector(".dot").style.boxShadow =
        "0px 1px 0px 1px hsl(224, 28%, 35%)";
      document.querySelector(".dot").style.backgroundColor =
        " hsl(0, 0%, 100%)";
      // change the background & boxshadow of the del and reset
      document.querySelector(".reset").style.backgroundColor =
        "hsl(225, 21%, 49%)";
      document.querySelector(".reset").style.boxShadow =
        "0px 1px 0px 1px hsl(224, 28%, 35%)";
      document.querySelector(".delete").style.backgroundColor =
        "hsl(225, 21%, 49%)";
      document.querySelector(".delete").style.boxShadow =
        "0px 1px 0px 1px hsl(224, 28%, 35%)";
      // change the background & boxshadow of the equal button
      document.querySelector(".equal").style.backgroundColor =
        "hsl(6, 63%, 50%)";
      document.querySelector(".delete").style.boxShadow =
        "0px 1px 0px 1px hsl(224, 28%, 35%)";
    } else if (spanTheme[1].classList.contains("active")) {
      // change the body background
      document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
      // change the color of the head
      document.querySelector(".calc-app").style.color = "hsl(60, 10%, 19%)";
      // change the color of the head
      document.querySelector(".theme").style.backgroundColor =
        "hsl(0, 5%, 81%)";
      // change the background of symbols
      document.querySelector(".symbols").style.backgroundColor =
        "hsl(0, 5%, 81%)";
      // change the background of screen
      document.querySelector(".screen").style.backgroundColor =
        "hsl(0, 0%, 93%)";
      // change the color of screen
      document.querySelector(".screen").style.color = "hsl(60, 10%, 19%)";
      // change the color of the numbers
      document.querySelectorAll(".num").forEach((num) => {
        num.style.color = "hsl(60, 10%, 19%)";
        num.style.boxShadow = "0px 1px 0px 1px  hsl(35, 11%, 61%)";
        num.style.backgroundColor = " hsl(0, 0%, 100%)";
      });
      // change the color of the symbols
      document.querySelectorAll(".symbol").forEach((num) => {
        num.style.color = "hsl(60, 10%, 19%)";
        num.style.boxShadow = "0px 1px 0px 1px  hsl(35, 11%, 61%)";
        num.style.backgroundColor = " hsl(0, 0%, 100%)";
      });
      // change the color & boxshadow of the dot symbol
      document.querySelector(".dot").style.color = "hsl(60, 10%, 19%)";
      document.querySelector(".dot").style.boxShadow =
        "0px 1px 0px 1px  hsl(35, 11%, 61%)";
      document.querySelector(".dot").style.backgroundColor =
        " hsl(0, 0%, 100%)";

      // change the background of the del and reset
      document.querySelector(".reset").style.backgroundColor =
        "hsl(185, 42%, 37%)";
      document.querySelector(".reset").style.boxShadow =
        "0px 1px 0px 1px  hsl(35, 11%, 61%)";
      document.querySelector(".delete").style.backgroundColor =
        "hsl(185, 42%, 37%)";
      document.querySelector(".delete").style.boxShadow =
        "0px 1px 0px 1px  hsl(35, 11%, 61%)";
      // change the background & boxshadow of the equal button
      document.querySelector(".equal").style.backgroundColor =
        "hsl(25, 98%, 40%)";
      document.querySelector(".equal").style.boxShadow =
        "0px 1px 0px 1px hsl(25, 99%, 27%)";
    } else if (spanTheme[2].classList.contains("active")) {
      // change the body background
      document.body.style.backgroundColor = " hsl(268, 75%, 9%)";
      // change the color of the head
      document.querySelector(".calc-app").style.color = "hsl(52, 100%, 62%)";
      // change the color of the head
      document.querySelector(".theme").style.backgroundColor =
        "hsl(268, 71%, 12%)";
      // change the background of symbols
      document.querySelector(".symbols").style.backgroundColor =
        "hsl(268, 71%, 12%)";
      // change the background of screen
      document.querySelector(".screen").style.backgroundColor =
        "hsl(268, 71%, 12%)";
      // change the color of screen
      document.querySelector(".screen").style.color = "hsl(52, 100%, 62%)";
      // change the color of the numbers
      document.querySelectorAll(".num").forEach((num) => {
        num.style.color = "hsl(52, 100%, 62%)";
        num.style.boxShadow = "0px 1px 0px 1px  hsl(290, 70%, 36%)";
        num.style.backgroundColor = "hsl(268, 47%, 21%)";
      });
      // change the color of the symbols
      document.querySelectorAll(".symbol").forEach((num) => {
        num.style.color = "hsl(52, 100%, 62%)";
        num.style.boxShadow = "0px 1px 0px 1px  hsl(290, 70%, 36%)";
        num.style.backgroundColor = "hsl(268, 47%, 21%)";
      });
      // change the color & boxshadow of the dot symbol
      document.querySelector(".dot").style.color = "hsl(52, 100%, 62%)";
      document.querySelector(".dot").style.boxShadow =
        "0px 1px 0px 1px  hsl(290, 70%, 36%)";
      document.querySelector(".dot").style.backgroundColor =
        "hsl(268, 47%, 21%)";

      // change the background of the del and reset
      document.querySelector(".reset").style.backgroundColor =
        "hsl(281, 89%, 26%)";
      document.querySelector(".reset").style.boxShadow =
        "0px 1px 0px 1px  hsl(290, 70%, 36%)";
      document.querySelector(".delete").style.backgroundColor =
        "hsl(281, 89%, 26%)";
      document.querySelector(".delete").style.boxShadow =
        "0px 1px 0px 1px  hsl(290, 70%, 36%)";
      // change the background & boxshadow of the equal button
      document.querySelector(".equal").style.backgroundColor =
        " hsl(176, 100%, 44%)";
      document.querySelector(".equal").style.boxShadow =
        "0px 1px 0px 1px hsl(177, 92%, 70%)";
    }
  });
});
