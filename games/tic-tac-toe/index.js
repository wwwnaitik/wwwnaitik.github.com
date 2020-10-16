document.addEventListener("DOMContentLoaded", function () {
  var firstplayer = "X";
  var secondplayer = "0";
  var id = document
    .getElementById("boxes")
    .addEventListener("click", startGame);
  function startGame(event) {
    secondPlayer();
    var box = document.querySelector(".block");
    function secondPlayer() {
      //   if ((box.innerHTML = " ")) {
      firstplayer = firstplayer === "X" ? "O" : "X";
      event.target.innerHTML = firstplayer;
      //   }
    }
  }
});
