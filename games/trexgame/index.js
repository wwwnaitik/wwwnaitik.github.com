document.addEventListener("DOMContentLoaded", function () {
  var position = 0;
  var count = 0;
  const dino = document.getElementById("dino");

  document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key == "ArrowUp" || e.key == " ") {
      jumpdino();
    }
  });

  function jumpdino() {
    let jumpingUpIntervel = setInterval(() => {
      if (count == 12) {
        clearInterval(jumpingUpIntervel);
        let jumpingDownIntervel = setInterval(() => {
          if (count == 1) {
            clearInterval(jumpingDownIntervel);
          } else if (1 < count < 12) {
          } else {
            position -= 10;
            count--;
            dino.style.bottom = position + "px";
          }
        }, 22);
      }

      position += 10;
      count++;
      dino.style.bottom = position + "px";
    }, 22);
  }
});
// other help \\
// document.addEventListener("DOMContentLoaded", function () {
//   var position = 0;
//   var count = 0;
//   let isGameOver = false;
//   const dino = document.getElementById("dino");
//   let cactusPosition = 700;

//   document.addEventListener("keydown", (e) => {
//     console.log(e.key);
//     if (e.key == "ArrowUp" || e.key == " ") {
//       jumpdino();
//     }
//   });

//   function jumpdino() {
//     let jumpingUpIntervel = setInterval(() => {
//       if (count == 12) {
//         clearInterval(jumpingUpIntervel);
//         let jumpingDownIntervel = setInterval(() => {
//           if (count == 1) {
//             clearInterval(jumpingDownIntervel);
//           }
//           position -= 10;
//           count--;
//           dino.style.bottom = position + "px";
//         }, 22);
//       }

//       position += 10;
//       count++;
//       dino.style.bottom = 100 + "px";
//     }, 22);
//   }

//   let i = 0;
//   var obstacle = [];
//   let gravity = 0.9;
//   function cactus() {
//     let random = Math.random() * 3000;

//     obstacle[i] = document.createElement("div");
//     obstacle[i].classList.add("cactus");
//     obstacle[i].setAttribute("id", "cactus" + i);
//     document.querySelector(".container").appendChild(obstacle[i]);
//     obstacle[i].style.left = 700 + "px";
//     obstacle[i].style.left = cactusPosition + "px";
//     let cactusInterval = setInterval(() => {
//       console.log("Dino from bottom: " + dino.offsetTop);
//       if (dino.offsetTop > 377 && cactusPosition < 50 && cactusPosition > 0) {
//         clearInterval(cactusInterval);
//         document.getElementById("title").innerHTML = "Game over";
//         console.log("cactus pos: " + cactusPosition);
//         isGameOver = true;
//       }
//       console.log(i + " ---" + cactusPosition + "---" + isGameOver);
//       if (cactusPosition < 1) {
//         let cSSClass = "cactus" + (i - 1);
//         //console.log("css class" + cSSClass);
//         document.getElementById(cSSClass).remove;
//         // cactusPosition = 700;
//       } else {
//         console.log(cactusPosition);
//         cactusPosition -= 20;
//         obstacle[i].style.left = cactusPosition + "px";
//       }
//     }, 50);
//     i++;
//     console.log(random);
//     if (!isGameOver) setTimeout(cactus, 3000);
//   }
//   cactus();
// });
