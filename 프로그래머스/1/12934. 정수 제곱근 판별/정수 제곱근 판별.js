function solution(n) {
    var answer =-1;
    if(Number.isInteger(Math.sqrt(n))){
        answer=Math.pow(Math.sqrt(n)+1,2);
    }
    
    return answer;
}