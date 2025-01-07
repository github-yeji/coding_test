function solution(s) {
    var answer = '';
    var arr=s.split('');
    var num=0;
    arr.forEach((item)=>{
        if(item!=' '){
            if(num%2==0){
                answer+=item.toUpperCase();
            }else{
                answer+=item.toLowerCase();
            }
           num++;
        }else{
            answer+=item;
            num=0;
        }
         
    })
    return answer;
}