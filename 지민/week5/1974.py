# import sys
# sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    answer = 0
    board = [list(map(int, input().split())) for _ in range(9)]

    for i in range(9):
        # 가로 검사
        row_check = [0] * 10
        # 세로 검사
        col_check = [0] * 10
        for j in range(9):
            row_check[board[i][j]] += 1
            col_check[board[j][i]] += 1
        # 중복 체크
        for k in range(1, 10):
            if row_check[k] != 1:
                answer = 0
                break

            if col_check[k] != 1:
                answer = 0
                break

        # 3*3 검사
        for i in range(3):
            for j in range(3):
                square_check = [0]*10
                for k in range(3):
                    for l in range(3):
                    square_check[board[3i + k]]

# print(f"#{test_case) {answer}"
