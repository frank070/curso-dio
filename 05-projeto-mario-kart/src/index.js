const player1 = {
  nome: "MARIO",
  velocidade: 4,
  manobrabilidade: 3,
  poder: 3,
  pontos: 0,
};

const player2 = {
  nome: "LUIGI",
  velocidade: 3,
  manobrabilidade: 4,
  poder: 4,
  pontos: 0,
};
//generates a random number between 1 and 6
//gera um número aleatório entre 1 e 6
async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
//função para sortear o bloco de corrida
//function to draw the race block
async function getRandomBlock() {
  let random = Math.random();
  let result;
  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }
  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    //sorteio dos blocos
    // block draw
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);
    //rolar os dados
    //roll the dice
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let testSkill1 = 0;
    let testSkill2 = 0;

    if (block === "RETA") {
      testSkill1 = diceResult1 + character1.velocidade;
      testSkill2 = diceResult2 + character2.velocidade;

      await logRollResult(
        character1.nome,
        "velocidade",
        diceResult1,
        character1.velocidade
      );
      await logRollResult(
        character2.nome,
        "velocidade",
        diceResult2,
        character2.velocidade
      );
    }
    if (block === "CURVA") {
      testSkill1 = diceResult1 + character1.manobrabilidade;
      testSkill2 = diceResult2 + character2.manobrabilidade;
      await logRollResult(
        character1.nome,
        "manobrabilidade",
        diceResult1,
        character1.manobrabilidade
      );
      await logRollResult(
        character2.nome,
        "manobrabilidade",
        diceResult2,
        character2.manobrabilidade
      );
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.poder;
      let powerResult2 = diceResult2 + character2.poder;

      console.log(`${character1.nome}  confronto com ${character2.nome}🥊!`);

      await logRollResult(
        character1.nome,
        "poder",
        diceResult1,
        character1.poder
      );
      await logRollResult(
        character2.nome,
        "poder",
        diceResult2,
        character2.poder
      );
      async function raffleRandom() {
        return Math.floor(Math.random() * 2) + 1;
      }

      let raffleRandom1 = await raffleRandom();

      async function powerRandom() {
        return Math.floor(Math.random() * 2);
      }
      let powerRandom1 = await powerRandom();

      if (powerResult1 > powerResult2 && character2.pontos >= 0) {
        if (raffleRandom1 === 1) {
          console.log(
            `Casco 🐢 , perdeu -1 ${character2.nome}, e ${character1.nome} ganhou um turbo aleatório ❓ ${powerRandom1}`
          );
          character2.pontos -= 1;
          character1.pontos++;
          character1.pontos += powerRandom1;

          if (character2.pontos < 0) {
            character2.pontos = 0;
          }
        } else if (raffleRandom1 === 2) {
          console.log(
            `Bomba 🧨 , perdeu  -2 ${character2.nome}, e ${character1.nome} ganhou um turbo aleatório ❓ ${powerRandom1}`
          );
          character2.pontos -= 2;
          character1.pontos++;
          character1.pontos += powerRandom1;

          if (character2.pontos < 0) {
            character2.pontos = 0;
          }
        }
        console.log(`${character1.nome} venceu o confronto!`);
      }

      if (powerResult2 > powerResult1 && character1.pontos >= 0) {
        if (raffleRandom1 === 1) {
          console.log(
            `Casco 🐢 , perdeu -1 ${character1.nome}, e ${character2.nome} ganhou um turbo aleatório ❓ ${powerRandom1}`
          );
          character1.pontos -= 1;
          character2.pontos++;
          character2.pontos += powerRandom1;

          if (character1.pontos < 0) {
            character1.pontos = 0;
          }
        } else if (raffleRandom1 === 2) {
          console.log(
            `Bomba 🧨 , perdeu  -2 ${character1.nome}, e ${character2.nome} ganhou um turbo aleatório ❓ ${powerRandom1}`
          );
          character1.pontos -= 2;
          character2.pontos++;
          character2.pontos += 2;

          if (character1.pontos < 0) {
            character1.pontos = 0;
          }
        }
        console.log(`${character2.nome} venceu o confronto!`);
      } else if (powerResult1 === powerResult2) {
        console.log("Empate no confronto!");
      }
    }

    //verificando o vencedorcle da rodada
    //verifying the winner of the round
    if (block !== "CONFRONTO") {
      if (testSkill1 > testSkill2) {
        console.log(`\n${character1.nome} venceu a rodada!`);
        character1.pontos++;
      } else if (testSkill2 > testSkill1) {
        console.log(`\n${character2.nome} venceu a rodada!`);
        character2.pontos++;
      } else {
        console.log("Empate na rodada!");
      }
    }

    console.log("____________________________________________________");
  }
}
//pontuação final
//final score
async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.nome}:  ${character1.pontos} pontos(s)`);
  console.log(`${character2.nome}:  ${character2.pontos} pontos(s)`);

  //vencedor da partida
  //winner of the game
  if (character1.pontos > character2.pontos)
    console.log(`\n${character1.nome} venceu a partida! 🏆`);
  else if (character2.pontos > character1.pontos)
    console.log(`\n${character2.nome} venceu a partida! 🏆`);
  else console.log("Empate! 😊");
}

//função auto invocada, para iniciar o jogo
//self-invoked function to start the game
(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.nome} e ${player2.nome} começando... \n`
  );
  await playRaceEngine(player1, player2); 
  await declareWinner(player1, player2);
})();
