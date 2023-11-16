# Level 1- 자릿수 더하기
def solution(n):
    answer = 0
    while (n > 0):
        answer += n % 10
        n //= 10
    return answer
  
# 다른 풀이 - 재귀 사용
def sum_digit(number):
    '''number의 각 자릿수를 더해서 return하세요'''
    if number < 10:
        return number

    return number%10 + sum_digit(number//10)
