function solution(i, j, k) {
    var answer = 0;
    var num=i;
    var arr=[];
    var reg=new RegExp(`${k}`,'g');
    while(true){
        if(num.toString().match(reg)!=null){
            arr.push(num.toString().match(reg))
        }
        if(j==num){
            break;
        }
        num++
    }
    answer=arr.flat().length;
    return answer;
}