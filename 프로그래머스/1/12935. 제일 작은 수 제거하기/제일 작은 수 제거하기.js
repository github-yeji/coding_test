function solution(arr) {
    var answer = [];
    
    var index=arr.indexOf(Math.min(...arr))
    arr.splice(index,1);
    if(arr.length==0){
        arr.push(-1)
    }
    return arr;
}