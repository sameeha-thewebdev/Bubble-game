var timer = 60;
var score = 0;
var rn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function getHit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = rn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 0; i < 102; i++) {
    var rndmnum = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rndmnum}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInterval);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1>Game Over, Your score is: ${score}</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var targetval = Number(dets.target.textContent);
  if (targetval === rn) {
    increaseScore();
    makeBubble();
    getHit();
  }
});

getHit();
runTimer();
makeBubble();
