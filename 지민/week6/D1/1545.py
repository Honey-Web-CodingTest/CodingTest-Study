import sys
sys.stdin = open("input.txt", "r")

input_num = int(input())
while (input_num >= 0):
    print(input_num, end=' ')
    input_num -= 1

# 다른 풀이 - 왜인지 이 풀이가 더 실행시간이 빠르다!
n = int(input())
answer = []
for i in range(n + 1):
    answer.append(n)
    n -= 1

for j in range(len(answer)):
    print(answer[j], end=' ')