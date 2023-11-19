# import sys
#
# sys.stdin = open("input.txt", "r")
#
# rounds = int(input())
# for i in range(rounds):
#     counts = 0
#     check = i + 1
#     answers = []
#     while check > 0:
#         if check % 10 == 3 or check % 10 == 6 or check % 10 == 9:
#             if answers and answers[-1] == "-":
#                 answers.append("-")
#             else:
#                 answers.append(" -")
#         elif check % 10 > 0:
#             if answers and answers[-1] == '-':
#                 answers.append(f" {str(check % 10)} ")
#             else:
#                 answers.append(f" {str(check % 10)}")
#         check //= 10
#     answers.reverse()
#     print(''.join(answers), end='')

# 풀이 1 - count로 완전 간단히
# i라는 숫자에 3 6 9 가 들어간 수 만큼 -출력, 띄어쓰기 없이
# 그 외에는 일반 숫자 출력

T = int(input())
for i in range(1, T+1): # 1 ~ 100

    i = str(i)
    clap = i.count('3') + i.count('6') + i.count('9')

    if clap == 0:
        print(i, end=' ')
    else:
        print("-" * clap, end=' ')

# 풀이 2 - list 사용
N = int(input())
clap = ['3', '6', '9']

for i in range(1, N+1):
    count = 0
    for j in str(i):
        if j in clap:
            count += 1
    if count > 0:
        i = '-' * count
    print(i, end=' ')