# import sys
#
# sys.stdin = open("input.txt", "r")

# 배열 끝을 최댓값으로 설정, 앞으로 오면서 최댓값과의 차이를 비교(최댓값 갱신일 떄는 계산 안 함)

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    days = int(input())
    answer = 0
    costs = list(map(int, input().split()))
    max_cost = costs[-1]
    for i in range(days-2, -1, -1):
        if max_cost <= costs[i]:
            max_cost = costs[i]
        else:
            answer += max_cost - costs[i]
    print(f"#{test_case} {answer}")
