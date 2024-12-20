function solution(before, after) {
    var answer = 1;
    var bef=before.split('');
    var aft=after.split('');
    bef.sort();
    aft.sort();
    for(var i=0;i<bef.length;i++){
        if(bef[i]!=aft[i]){
            answer=0;
        }
    }
    return answer;
}