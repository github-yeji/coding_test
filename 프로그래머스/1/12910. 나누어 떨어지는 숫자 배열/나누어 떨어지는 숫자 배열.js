function solution(arr, divisor) {
    var answer = [];
    arr.forEach((item)=>{
        if(item%divisor==0){
            answer.push(item)
        }
    })
    if(answer.length==0){
        answer.push(-1)
    }else{
        answer.sort(function(a,b){
            return a-b;
        })
    }
    return answer;
}