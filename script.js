const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const ms = document.querySelector(".ms");
const win = document.querySelector(".win");
const lose = document.querySelector(".lose");

const startBtn = document.querySelector("#start");
const restartBtn = document.querySelectorAll(".restart-btn");

let mins = 0,
  secs = 0,
  mss = 0;

startBtn.addEventListener("click", () => {
  setInterval(updateValues);
  startBtn.textContent = switchText();
  startBtn.classList.toggle("stop-btn");
  winLose();
});

restartBtn.forEach((element) => {
  element.addEventListener("click", () => {
    win.style.display = "none";
    lose.style.display = "none";
    (mins = 0), (secs = 0), (mss = 0);
    min.textContent = "00";
    sec.textContent = "00";
    ms.textContent = "00";
  });
});

function switchText() {
  if (startBtn.textContent === "START") {
    return "STOP";
  } else {
    return "START";
  }
}

function updateValues() {
  if (startBtn.textContent === "STOP") {
    mss++;
    if (mins <= 9) {
      min.textContent = "0" + mins;
    } else {
      min.textContent = mins;
    }
    if (secs <= 9) {
      sec.textContent = "0" + secs;
    } else {
      sec.textContent = secs;
    }
    if (mss <= 9) {
      ms.textContent = "0" + mss;
    } else {
      ms.textContent = mss;
    }

    if (mss >= 1000) {
      mss = 0;
      ms.textContent = "0" + mss;
      secs++;
    }
    if (secs >= 60) {
      secs = 0;
      sec.textContent = secs;
      mins++;
    }
  }
}

function winLose() {
  if (secs === 5 && mss === 0) {
    win.style.display = "flex";
  } else if ((startBtn.textContent === "START" && secs < 1) || secs > 1) {
    lose.style.display = "flex";
  }
}
