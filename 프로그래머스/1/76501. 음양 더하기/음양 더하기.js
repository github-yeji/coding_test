function solution(absolutes, signs) {
    var answer = 0;
    for(var i=0;i<absolutes.length;i++){
        if(signs[i]==true){
            answer+=absolutes[i]
        }else{
            answer+=Number(-absolutes[i]);
        }
    }
    return answer;
}