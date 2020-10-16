document.addEventListener("DOMContentLoaded", function () {
  var position = 0;
  var count = 0;
  var isJump = false;
  var dino = document.getElementById("dino");
  var second = 0;
  var cactus = document.getElementById("cactus");
  // if ((window.getComputedStyle(dino).getPropertyValue("top") = 200)) {
  document.addEventListener("keydown", (e) => {
    console.log(e.key);

    if (e.key == "ArrowUp" || e.key == " ") {
      if (!isJump) {
        isJump = true;
        jumpdino();
      }
    }
  });
  setInterval(() => {
    second += 1;
    var yourtotalscore = (document.getElementById("score").innerHTML =
      "<h3> Score: " + second + "</h3>");
  }, 200);
  function jumpdino() {
    let dinoUPInterval = setInterval(() => {
      if (count == 15) {
        clearInterval(dinoUPInterval);
        let dinoDownInterval = setInterval(() => {
          if (count == 1) {
            clearInterval(dinoDownInterval);
            isJump = false;
          }
          position -= 10;
          count--;
          dino.style.bottom = position + "px";
        }, 35);
      }
      position += 10;
      count++;
      dino.style.bottom = position + "px";
    }, 35);
  }
  var dinoposition = dino.style.bottom;
  var cactusposition = cactus.style.left;
  if (dinoposition < 80 && cactusposition < 50 && cactusposition > 0) {
    function gameOver() {
      document.write("<h2>Game over</h2>");
    }
  }
});
// // function startGame() {
// //   //   gameboard = Array.from(Array(9));
// //   console.log(gameboard);
// // }
const gameboard = Array.from(Array(9).key);
