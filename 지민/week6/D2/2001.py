import sys

sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n, m = map(int, input().split())
    flies = [list(map(int, input().split())) for _ in range(n)]
    max_sum = 0

    for i in range(n - m + 1):
        for j in range(n - m + 1):
            current_sum = sum(
                sum(flies[x][y] for y in range(j, j + m))
                for x in range(i, i + m)
            )
            max_sum = max(max_sum, current_sum)
    print(f"#{test_case} {max_sum}")
