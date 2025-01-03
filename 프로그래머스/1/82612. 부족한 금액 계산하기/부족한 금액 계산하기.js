function solution(price, money, count) {
    var answer = -1;
    var total=0;
    for(var i=1;i<=count;i++){
        total+=i*price;
    }
    answer=total-money;
    if(answer<0){
        answer=0;
    }else{
        answer=Math.abs(answer);
    }
    
    
    return answer;
}