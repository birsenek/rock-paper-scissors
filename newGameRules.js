const a = "Pedra",
  b = "Papel",
  c = "Tesoura";

//jogada do computador com escolha aleatória
const pcPlay = () => {
  let n = Math.floor(Math.random() * 3 + 1);
  if (n == 1) {
    return a;
  } else if (n == 2) {
    return b;
  } else {
    return c;
  }
};

//jogada do jogador, com escolha basada no radio input
const playerPlay = () => {
  try {
    let playerSelection = document.querySelector("input[type=radio]:checked")
      .value;
    if (playerSelection == 1) {
      return a;
    } else if (playerSelection == 2) {
      return b;
    } else {
      return c;
    }
    
  } catch (error) {
    alert("Jogador, escolha sua Jogada!")
    location.reload()
  }
};

this.pontuacaoPlayer = 0;
this.pontuacaoPc = 0;

//checar score
const checkScoreboard = () => {
  if (this.pontuacaoPlayer == 5 || this.pontuacaoPc == 5) {
    button.style.color = "black";
    final()
  } 
};

//Tela Final
const final = () => {
  const placarFinal = document.createElement('h4')
  placarFinal.style.color = 'red'
  const content = document.querySelector('#content')
  const scoreboard = document.querySelector('#scoreboard')
  const finalResult = document.querySelector('#resultados')
  content.removeChild(finalResult)
  if (this.pontuacaoPlayer == 5) {
    placarFinal.textContent = "Parabéns! Você Venceu! \\[T]/"
    scoreboard.appendChild(placarFinal)
  } else if (this.pontuacaoPc == 5) {
    placarFinal.textContent = "Que pena! Você Perdeu! :("
    scoreboard.appendChild(placarFinal)
  }

  //novo jogo button
  buttonArea.removeChild(button)
  buttonArea.appendChild(newGame)

}

//dispara o round

const gameRound = () => {
  button.disabled = true
  const computerPlay = pcPlay();
  const playerSelection = playerPlay();
  setTimeout(() => {
    button.textContent = a
  }, 500);
  
  setTimeout(() => {
    button.textContent = b
  }, 1000);
  
  setTimeout(() => {
    button.textContent = c
  }, 1500);

  document.getElementById("computer-play").innerHTML = ""
  document.getElementById("result").innerHTML = ""

  if (playerSelection == a && computerPlay == c
    || playerSelection == b && computerPlay == a
    || playerSelection == c && computerPlay == b ) {
      setTimeout(() => {
        pontuacaoPlayer += 1;
      document.getElementById("computer-play").innerHTML = computerPlay;
      document.getElementById("jogador").innerHTML = this.pontuacaoPlayer;
      document.getElementById("result").innerHTML = "Vitória!"
      checkScoreboard()
      button.textContent = "Jogar!"
      button.disabled = false
    }, 2000);
  } else if (playerSelection == a && computerPlay == b
    || playerSelection == b && computerPlay == c
    || playerSelection == c && computerPlay == a) {
      setTimeout(() => {
        pontuacaoPc += 1;
      document.getElementById("computer-play").innerHTML = computerPlay;
      document.getElementById("computador").innerHTML = this.pontuacaoPc;
      document.getElementById("result").innerHTML = "Derrota!"
      checkScoreboard()
      button.textContent = "Jogar!"
      button.disabled = false
    }, 2000);
  } else {
    setTimeout(() => {
      document.getElementById("result").innerHTML = "Empate!"
      button.textContent = "Jogar!"
    }, 2000);
    button.disabled = false
  }
};

//eventos
const button = document.querySelector("#play");
button.addEventListener('click', e => {
  const content = document.querySelector('#content')
  const header = document.querySelector('header')
  if (content.contains(header)) {
    content.removeChild(header)
  }
})

const newGame = document.createElement('button')
  const buttonArea = document.querySelector('#buttonArea')
  newGame.textContent = "Novo Jogo!"

// button.addEventListener("click", checkScoreboard);
button.addEventListener("click", gameRound);
newGame.addEventListener('click', e => location.reload())
