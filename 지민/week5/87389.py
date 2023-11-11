# Level 1 - 나머지가 1이 되는 수 찾기
def solution(n):
    answer = 0
    while n - 1 >= answer:
        answer += 1
        if n % answer == 1:
            return answer