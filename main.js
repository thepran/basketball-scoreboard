let homeScore = 0;
let guestScore = 0;
let homeScoreEl = document.getElementById("home-team-score");
let guestScoreEl = document.getElementById("guest-team-score");
homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;

function increase(team, incr) {
  switch (team) {
    case "home":
      homeScore += Number(incr);
      homeScoreEl.textContent = homeScore;
      break;
    case "guest":
      guestScore += Number(incr);
      guestScoreEl.textContent = guestScore;
      break;
  }
  if (homeScore == guestScore) {
    homeScoreEl.classList.add("blink");
    guestScoreEl.classList.add("blink");
  } else {
    homeScoreEl.classList.remove("blink");
    guestScoreEl.classList.remove("blink");
  }
  updateColor();
}
function newGame() {
  homeScore = guestScore = 0;
  homeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
  updateColor();
  homeScoreEl.style.color = guestScoreEl.style.color = "#ffffff";
  homeScoreEl.classList.remove("blink");
  guestScoreEl.classList.remove("blink");
}

function updateColor() {
  if (homeScore == guestScore) {
    homeScoreEl.style.color = "#e0c159";
    guestScoreEl.style.color = "#e0c159";
  } else if (homeScore > guestScore) {
    homeScoreEl.style.color = "#38da27";
    guestScoreEl.style.color = "#e04063";
  } else {
    homeScoreEl.style.color = "#e04063";
    guestScoreEl.style.color = "#38da27";
  }
}
