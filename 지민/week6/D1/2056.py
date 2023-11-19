# import sys
#
# sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    raw_dates = list(input())
    year = ''.join(raw_dates[0:4])
    month = ''.join(raw_dates[4:6])
    date = ''.join(raw_dates[6:8])
    if int(year) < 0:
        print(f"#{test_case} -1")
    elif int(month) > 12 or int(month) < 1:
        print(f"#{test_case} -1")
    elif int(date) > 32 or int(date) < 1:
        print(f"#{test_case} -1")
    elif int(month) == 2 and int(date) > 28:
        print(f"#{test_case} -1")
    #      if int(month) in [1,3,5,7,8,10,12]: 이렇게도 표현 가능!
    elif (month == 4 or 6 or 9 or 11) and int(date) > 30:
        print(f"#{test_case} -1")
    else:
        print(f"#{test_case} {year}/{month}/{date}")

