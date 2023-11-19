# 각 자릿수 합 구하기
inputs = int(input())
sum = 0
while (inputs > 0):
    sum += inputs % 10
    inputs //= 10
print(sum)

# 다른 풀이 - 문자열 돌면서 숫자 변환해서 더하기
# 첫줄 의미는 모르겠음..
if __name__ == "__main__":
    arr = input()
    sum = 0
    for i in arr:
        sum += int(i)
    print(sum)
