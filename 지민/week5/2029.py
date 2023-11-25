# import sys
#
# sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    a, b = map(int, input().split())
    div, mod = divmod(a, b)
    print(f'#{test_case} {div} {mod}')

# 다른 풀이 - 내장함수 없는 버전, 다른 출력 형태
T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    a, b = map(int, input().split())

    quotient = a // b
    remainder = a % b

    print('#{0} {1} {2}'.format(test_case, quotient, remainder))