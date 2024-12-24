function solution(n) {
    var answer = 0;
    var i=0;
    while(true){
        if(n%i==0){
            answer+=i;
        }
        if(i==n){
            break;
        }
        i++;
    }
    return answer;
}