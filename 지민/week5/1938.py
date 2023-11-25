import sys
sys.stdin = open("input.txt", "r")

a, b = map(int, input().split())
sum_result = a + b
minus_result = a - b
multiply_result = a * b
division_result = a // b
print(sum_result)
print(minus_result)
print(multiply_result)
print(division_result)

# 다른 풀이
a, b = map(int, input().split())
print(a+b)
print(a-b)
print(a*b)
print(a//b)