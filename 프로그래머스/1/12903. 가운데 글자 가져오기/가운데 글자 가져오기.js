function solution(s) {
    var answer = '';
    if(s.length%2==0){
        answer=s.substring(s.length/2-1,(s.length/2)+1);
    }else{
        answer=s.substring(Math.ceil(s.length/2)-1,Math.ceil(s.length/2));
    }
    return answer;
}