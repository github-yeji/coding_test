function solution(score) {
    var answer = [];
    var map=score.map(function(el,i){
        return {index:i,value:((el[0]+el[1])/2)}
    })
    map.sort(function (a, b) {
      return +(a.value < b.value) || +(a.value === b.value) - 1;
    });
    answer=map.map(function(val,i){
        return {rank:i,index:val['index'],score:val['value']}
    })
    
     answer.sort(function (a, b) {
        if(a.index>b.index){
            if(a.score==b.score){
                a.rank=b.rank;
                return 1;
             }
             return 1;
        }
        
         if(a.index<b.index){
             return -1;
        }
         return 0;
    });
    answer=answer.map(function(el){
        return el.rank+1
    })

    return answer;
}