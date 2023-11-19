# Level 1 - 문자열 정수로 바꾸기
def solution(s):
    return int(s)
  
# 다른 풀이 - 알고리즘 공부용 풀이
def strToInt(str): 
    result = 0
    for idx, number in enumerate(str[::-1]):
        if number == '-':
            result *= -1
        else:
            result += int(number) * (10 ** idx)
    return result