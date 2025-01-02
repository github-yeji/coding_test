function solution(n) {
    var answer = [];
    answer=n.toString().split('').reverse().map((x)=>Number(x));
    return answer;
}