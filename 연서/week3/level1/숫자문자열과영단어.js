function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  numbers.forEach((num, idx) => (s = s.replaceAll(num, idx)));

  return Number(s);
}

//다른 풀이 (1) => string 기준으로 split, 이것을 해당 index의 int로 join 해서 치환하는 방법
// function solution(s) {
//     let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     var answer = s;

//     for(let i=0; i< numbers.length; i++) {
//         let arr = answer.split(numbers[i]);
//         answer = arr.join(i);
//     }

//     return Number(answer);
// }

// 다른 풀이(2) - 객체와 정규표현식 사용
// function solution(s) {
//   let charSet = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };

//   for (let [key, value] of Object.entries(charSet)) {
//     let re = new RegExp(`${key}`, "g");
//     s = s.replace(re, value);
//   }
//   return Nubmer(s); //참고 - parseInt보다 Number가 빠르다
// }
