# import sys
#
# sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    nums = list(map(int, input().split()))
    min_num = min(nums)
    max_num = max(nums)
    for number in range(len(nums)):
        if min_num in nums:
            nums.remove(min_num)
        if max_num in nums:
            nums.remove(max_num)
    answer = round(sum(nums) / len(nums))
    print(f"#{test_case} {answer}")
