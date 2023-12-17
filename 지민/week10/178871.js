//Level 1 - 달리기 경주
//시간 초과 발생한 풀이 -  players가 길어졌을 때 느려진다.
//이름별 index를 object로 만들어서 찾으시면 시간초과 이슈 해결 가능하다고 함.
function solution(players, callings) {
	for (i = 0; i < callings.length; i++) {
		const idx = players.indexOf(callings[i]);
		players[idx] = players[idx - 1];
		players[idx - 1] = callings[i];
	}
	return players;
}

// 다른 풀이
function solution(players, callings) {
	let idx;
	let name1;
	let name2;
	const idxList = {};

	players.forEach((name, index) => (idxList[name] = index));
	for (let call of callings) {
		idx = idxList[call];
		name1 = players[idx];
		name2 = players[idx - 1];
		idxList[call] -= 1;
		idxList[name2] += 1;
		players[idx] = name2;
		players[idx - 1] = name1;
	}

	return players;
}
