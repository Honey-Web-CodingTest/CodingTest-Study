// https://school.programmers.co.kr/learn/courses/30/lessons/12930
// 이상한 문자 만들기

// 내 풀이
const solution = (s) => {
  const arr = s.split(' ');
  let ans = '';

  arr.map((word, idx) => {
    [...word].forEach((char, idx) => {
      if (idx % 2 === 0) return ans += char.toUpperCase();
      
      return ans += char.toLowerCase();
    })
    
    if (idx === arr.length - 1) return;

    ans += ' ';
  })

  return ans;
}

// 다른 풀이
function toWeirdCase1(s){
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
}

// replace와 regex에 대하여 공부하기

// 다른 풀이
function toWeirdCase2(s){
  return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j.toLowerCase()).join('')).join(' ')
}

// join method