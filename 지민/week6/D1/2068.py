# import sys
# sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    numbers = map(int, input().split())
    print(f'#{test_case} {max(numbers)}')

# 다른 풀이 - 다른 표현 방식
T = int(input())

for test_case in range(1, T + 1):
    nums = map(int, input().split())
    print("#%d %d" % (test_case, max(nums)))