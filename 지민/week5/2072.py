# import sys
# sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    numbers = map(int, input().split())
    sum = 0
    for nums in numbers:
        if nums % 2 != 0:
            sum += nums
    print(f'#{test_case} {sum}')

# 다른 풀이 - array 활용, 실행시간 더 빠름
n = int(input())
array = [0] * n
for i in range(n):
    data = list(map(int, input().split()))
    for j in range(10):
        if data[j] % 2 != 0:
            array[i] += data[j]

for i in range(n):
    print(f"#{i + 1} {array[i]}")