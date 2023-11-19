import sys
sys.stdin = open("input.txt", "r")

input_num = int(input())
answers = []

i = 1
while i <= input_num:
    if input_num % i == 0:
        answers.append(i)
    i += 1
for nums in answers:
    print(nums, end=' ')

# 다른 풀이
n = int(input())
answer = []
for i in range(1,n+1) :
    if n % i == 0 :
        answer.append(i)
print(*answer)