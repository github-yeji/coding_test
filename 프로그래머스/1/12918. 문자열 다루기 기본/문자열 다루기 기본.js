function solution(s) {
    var answer = true;
    var reg=new RegExp(/\D/)
    if(reg.test(s)==true){
        answer=false;
    }else{
        if(s.length==4||s.length==6){
            answer=true
        }else{
            answer=false
        }
    }
    return answer;
}