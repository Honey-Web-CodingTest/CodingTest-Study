import sys
sys.stdin = open("input.txt", "r")


total = int(input())
init = 1
print(1, end=' ')
for _ in range(1, total+1):
    print(2*init, end=' ')
    init = 2*init

# 다른 풀이 - 더 깔끔하다
N = int(input())

result = 1

for i in range(N + 1):
    print(result, end=' ')
    result *= 2