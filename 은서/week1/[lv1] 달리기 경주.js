function solution(players, callings) {
  let idx_object = {};

  for (let i = 0; i < players.length; i++) {
    idx_object[players[i]] = i;
  }

  callings.forEach((value) => {
    let current_idx = idx_object[value];

    let front_player = players[current_idx - 1];
    players[current_idx - 1] = players[current_idx];
    players[current_idx] = front_player;

    idx_object[value]--;
    idx_object[players[current_idx]]++;
  });

  return players;
}
