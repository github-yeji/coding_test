function solution(array, commands) {
    var answer = [];
    commands.forEach((item)=>{
        var arr=array.slice(item[0]-1,item[1]).sort(function(a,b){return a-b;});
        answer.push(arr[item[2]-1])
    })
    return answer;
}