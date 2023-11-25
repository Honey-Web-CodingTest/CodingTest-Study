# P 비밀번호
# K부터 1씩 증가
P, K = map(int, input().split())
print(P - K + 1)

# 다른 풀이 - 예외 처리까지!
P, K = map(int, input().split())
print(P-K+1 if P>K else P+1000-K)