var jogador = 3;
var jogador2 = 3;
var placar;

// if ternário

jogador != -1 && jogador2 != -1 ? console.log("jogador invalido") : console.log("jogadors invalidos");

// Usando if
if(jogador > 0 && jogador2 == 0 || jogador2 >= 1) {
    console.log('Jogador marcou ponto!');
    placar = jogador > jogador2;

    // Usando else if
} else if (jogador2 > 0 && jogador == o) {
    console.log('Jogador2 marcou ponto!');
    placar = jogador2 > jogador;

    // Usando else
} else {
    console.log('Jogadores não marcaram pontos!');
}

// Usando switch

switch (placar) {
    case placar = jogador > jogador2:
        console.log('Jogador ganhou!');
        break;
    case placar = jogador2 > jogador:
        console.log('Jogador2 ganhou!');
        break;
    default:
        console.log('Empate!');
}
