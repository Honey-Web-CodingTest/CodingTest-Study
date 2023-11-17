rounds = int(input())
sum = 0
for i in range(1, rounds+1):
    sum += i
print(sum)

# 다른 풀이 - list 활용
n = int(input())
n1 = list(range(1, n+1))
print(sum(n1))