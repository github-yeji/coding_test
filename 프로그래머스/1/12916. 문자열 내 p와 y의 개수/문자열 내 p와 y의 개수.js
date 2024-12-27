function solution(s){
    var answer = true;
    var p=0;
    var y=0;
    var arr=s.split('');
    arr.forEach((item)=>{
        if(item=='p'||item=='P'){
            p++;
        
        }
        if(item=='y'||item=='Y'){
            y++
        }
    })
    if(p!=y){
        answer=false;
    }

    return answer;
}