function solution(chicken) {
    var answer = 0;
    var i=chicken
    while(true){
        if(i>=10){
            answer+=i/10;
            i/=10;
        }
        if(i<10){
            break;
        }
    }
    return Math.round(answer);
}