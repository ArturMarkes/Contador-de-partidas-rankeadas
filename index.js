// Chame a função resultado para obter o valor correto de PlayerWins
let PlayerWins = resultado(50, 45);

function resultado(wins, loses) {
    return wins - loses;
}

let rank;

if (PlayerWins < 10) {
    rank = "ferro";
} else if (PlayerWins >= 11 && PlayerWins <= 20) {
    rank = "bronze";
} else if (PlayerWins >= 21 && PlayerWins <= 50) {
    rank = "prata";
} else if (PlayerWins >= 51 && PlayerWins <= 80) {
    rank = "ouro";
} else if (PlayerWins >= 81 && PlayerWins <= 90) {
    rank = "diamante";
} else if (PlayerWins >= 91 && PlayerWins <= 100) {
    rank = "lendário";
} else if (PlayerWins >= 101) {
    rank = "imortal";
}

console.log("O herói está no nível " + rank);
