function solution(n, arr1, arr2) {
    return [...Array(n)].map((_, i) => 
        [...(arr1[i] | arr2[i])
            .toString(2)
            .padStart(n, ' ')]
            .map(v => +v ? '#' : ' ')
            .join('')
    );
}