a, b = map(int, input().split())
if (a == 1 and b == 2) or (a == 2 and b == 3) or (a==3 and b == 1):
    print('B')
else:
    print('A')

# 다른 풀이 - 리스트 사용
A, B = map(int, input().split())
# 가위, 바위, 보
      #   1  2  3
win = [0, 3, 1, 2]

if A == B:
    print('비김')
elif win[A] == B:
    print('A')
else:
    print('B')

#다른 풀이 2 - 뺼셈 값으로 정답 반환
A , B = map(int,input().split())
answer = ''
if A-B == 1 or B-A == 2:
    answer = 'A'
elif B-A == 1 or A-B == 2:
    answer = 'B'
print(answer)