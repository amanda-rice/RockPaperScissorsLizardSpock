let plays = {
  Rock: {
    img: 'hand-rock',
    losesTo: [
      'Spock',
      'Paper'
    ]
  },
  Paper: {
    img: 'hand-paper',
    losesTo: [
      'Lizard',
      'Scissors'
    ]
  },
  Scissors: {
    img: 'hand-scissors',
    losesTo: [
      'Rock',
      'Spock'
    ]
  },
  Spock: {
    img: 'hand-spock',
    losesTo: [
      'Lizard',
      'Paper'
    ]
  },
  Lizard: {
    img: 'hand-lizard',
    losesTo: [
      'Scissors',
      'Rock'
    ]
  }
}
function makeButtons() {
  let template = ''
  for (let prop in plays) {
    console.log(prop)
    let play = plays[prop]
    console.log(play)
    template += `
    <div class="col-2 align-self-center text-center d-flex flex-column align-items-center">
    <span class="iconify icon-size my-2" data-icon="fa-regular:${play.img}" data-inline="false"></span>
    <button class="btn mx-1 btn-secondary" onclick="play('${prop}')">${prop}</button>
    </div>`

  }
  console.log(template)
  document.getElementById('button').innerHTML = template
}
function makeOpponent(opp, userChoice) {
  let template = ''
  template += `
    <div class="col-2 align-self-center text-center d-flex flex-column align-items-center">
    <span class="iconify icon-size my-2" data-icon="fa-regular:${plays[userChoice].img}" data-inline="false"></span>
    </div>
    <div class="col-2 align-self-center text-center d-flex flex-column align-items-center">
    <span class="iconify icon-size my-2" data-icon="fa-regular:${plays[opp].img}" data-inline="false"></span>
    </div>`
  document.getElementById('opponent').innerHTML = template
}

function play(choice) {
  let comp = getRandom()
  makeOpponent(comp, choice)
  console.log(comp)
  console.log('plays[choice]', plays[choice])
  console.log('plays.paper', plays.Paper)
  let loser = plays[choice].losesTo.find(loser => loser == comp)
  console.log('loser', loser)
  let output = ''
  if (choice == comp) {
    output = 'It\'s a draw! Try again.'
  }
  else if (loser) {
    output = `You lose! ${comp} beats ${choice}!`
  }
  else {
    output = `You win! ${choice} beats ${comp}!`
  }
  writeOutput(output)
}
function writeOutput(text) {
  document.getElementById("output-text").innerText = text
}
function getRandom() {
  let choices = Object.keys(plays)
  random = Math.floor(Math.random() * 3)
  console.log(random)
  return choices[random]
}
makeButtons()