const a = "Pedra",
  b = "Papel",
  c = "Tesoura";

function computerPlay() {
  let n = Math.floor(Math.random() * 3 + 1);
  console.log("Computador: " + n);
  if (n == 1) {
    return a;
  } else if (n == 2) {
    return b;
  } else {
    return c;
  }
}

function playerSelection() {
  let playerSelection = document.querySelector("input[type=radio]:checked")
    .value;
  console.log(playerSelection);
  if (playerSelection == 1) {
    return a;
  } else if (playerSelection == 2) {
    return b;
  } else {
    return c;
  }
}

function gameRound(playerSelection, computerPlay) {
  document.getElementById('computer-play').innerHTML = computerPlay
  if (playerSelection == a && computerPlay == c) {
    return document.getElementById('result').innerHTML = "Vitória!"
  } else if (playerSelection == a && computerPlay == b) {
    return document.getElementById('result').innerHTML = "Derrota!"
  } else if (playerSelection == b && computerPlay == a) {
    return document.getElementById('result').innerHTML = "Vitória!"
  } else if (playerSelection == b && computerPlay == c) {
    return document.getElementById('result').innerHTML = "Derrota!"
  } else if (playerSelection == c && computerPlay == b) {
    return document.getElementById('result').innerHTML = "Vitória!"
  } else if (playerSelection == c && computerPlay == a) {
    return document.getElementById('result').innerHTML = "Derrota!"
  } else {
    return document.getElementById('result').innerHTML = "Empate!"
  }
}