// Lv 1. 달리기 경주 - 연습문제
function solution(players, callings) {
  const original_players = {};

  players.forEach((elm, idx) => {
    original_players[elm] = idx;
  });

  for (let i = 0; i < callings.length; i++) {
    const pre_ranking = original_players[callings[i]]; // 추월하기 전 몇등인지
    const temp = players[pre_ranking - 1]; // 추월당한 선수의 이름

    players[pre_ranking - 1] = callings[i];
    original_players[callings[i]] = pre_ranking - 1;

    players[pre_ranking] = temp;
    original_players[temp] = pre_ranking;
  }
  return players;
}
