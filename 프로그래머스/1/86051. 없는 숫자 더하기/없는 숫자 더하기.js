function solution(numbers) {
    var answer = 0;
    var num=0;
    while(num<10){
        if(!numbers.includes(num)){
            answer+=num;
        }
        num++;
    }
    return answer;
}