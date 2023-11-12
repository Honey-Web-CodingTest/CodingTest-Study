# Level 1 - 문자열 내 p와 y의 개수
def solution(s):
    answer = True

    lower_s = s.lower()
    count_p = lower_s.count('p')
    count_y = lower_s.count('y')
    if (count_p == count_y == 0):
        return True
    elif (count_p == count_y):
        return True
    else:
        return False

# 다른 풀이 - 비교해서 값 바로 반환
def numPY(s):
    return s.lower().count('p') == s.lower().count('y')