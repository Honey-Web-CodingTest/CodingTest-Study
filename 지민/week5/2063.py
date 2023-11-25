import sys
sys.stdin = open("input.txt", "r")

rounds = int(input())
numbers = list(map(int, input().split()))
numbers = sorted(numbers)
print(numbers[(rounds + 1) // 2 - 1])

# 다른 풀이 - 그냥 //를 써버리면 된다. 어차피 인덱스는 1 뺴주니까
T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
a=list(map(int, input().split()))
a.sort()
mid=int(T//2)
print(a[mid])