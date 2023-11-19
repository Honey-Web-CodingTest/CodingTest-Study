function solution(priorities, location) {
  let answer = 0;

  // process와 index 값 저장
  const array = priorities.map((process, index) => {
    return { process, index };
  });

  while (array.length) {
    const queue = array.shift();

    // some 메서드 -> queue.process보다 큰 값 있는지 검사
    // 큰 값 있으면 push
    // 큰 값 없으면 answer++, index값이 location이랑 같아지면 break
    if (array.some((el) => el.process > queue.process)) {
      array.push(queue);
    } else {
      answer++;
      if (queue.index === location) break;
    }
  }

  return answer;
}
