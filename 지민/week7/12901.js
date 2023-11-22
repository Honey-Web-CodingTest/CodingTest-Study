// Level 1 - 2016년 문제 풀이
// 실수로 i를 a로 적음 - 변수명 잘 확인하기!
function solution(a, b) {
	const day_list = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
	let days = 0;
	for (i = 1; i < a; i++) {
		if (a === 1) {
			break;
		} else if (i === 2) {
			days += 29;
		} else if (i === 4 || i === 6 || i === 9 || i === 11) {
			days += 30;
		} else {
			days += 31;
		}
	}
	days += b;

	return day_list[(days - 1) % 7];
}

// 다른 풀이 - Date 활용
function getDayName(a, b) {
	var tempDate = new Date(2016, a - 1, b);

	return tempDate.toString().slice(0, 3).toUpperCase();
}

// 다른 풀이 2 - 월별 날짜도 리스트로 사용
function getDayName(a, b) {
	var dayList = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
	var monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	var daySum;
	if (a < 2) {
		daySum = b - 1;
	} else {
		daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
	}
	return dayList[daySum % 7];
}
