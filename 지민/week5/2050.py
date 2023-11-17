# import sys
#
# sys.stdin = open("input.txt", "r")

strings = input()
strings = list(strings)
for i in range(len(strings)):
    print(f'{ord(strings[i]) - 64}', end=' ')

# 다른 풀이 - 아스키코드 값 활용
if __name__ == '__main__':
    alphabet = input()
    alphabet = list(alphabet)

    for i in alphabet:
        print(f"{ord(i) - 64}", end=' ')