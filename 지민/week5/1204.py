# import sys
#
# sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    rounds = int(input())
    scores = list(map(int, input().split()))
    scores_set = list(set(scores))
    frequency = []
    for i in range(len(scores_set)):
        frequency.append(scores.count(scores_set[i]))
    max_index = frequency.index(max(frequency))
    print(f"#{rounds} {scores_set[max_index]}")
