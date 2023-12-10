// https://school.programmers.co.kr/learn/courses/30/lessons/12931
// 자릿수 더하기

function solution(n) {
    let answer = String(n).split('').reduce((acc, cur) => +acc + +cur, 0);

    return answer;
}
