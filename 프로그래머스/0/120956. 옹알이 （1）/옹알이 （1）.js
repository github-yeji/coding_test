function solution(babbling) {
    var answer = 0;
    var arr=[];
    var reg=new RegExp(/aya|ye|woo|ma/);
    babbling.forEach((item)=>{
            arr.push(item.split(reg).join(''))
    })
    arr.forEach((val)=>{
        if(val==''){
            answer++;
        }
    })
    return answer;
}