function changeScore(score) {
   this.score = score;
}

const add1 = new changeScore(1);
const add2 = new changeScore(2);
const add3 = new changeScore(3);

let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');

let currentHomeScore = 0;
let currentGuestScore = 0;

function increaseHomeBy1() {
   currentHomeScore += add1.score;
   homeScore.innerText = currentHomeScore;
};

function increaseHomeBy2() {
   currentHomeScore += add2.score;
   homeScore.innerText = currentHomeScore;
}

function increaseHomeBy3() {
   currentHomeScore += add3.score;
   homeScore.innerText = currentHomeScore;
}

function increaseGuestBy1() {
   currentGuestScore += add1.score;
   guestScore.innerText = currentGuestScore;
}

function increaseGuestBy2() {
   currentGuestScore += add2.score;
   guestScore.innerText = currentGuestScore;
}

function increaseGuestBy3() {
   currentGuestScore += add3.score;
   guestScore.innerText = currentGuestScore;
}




