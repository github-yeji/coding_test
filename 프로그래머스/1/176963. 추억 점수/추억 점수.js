function solution(name, yearning, photo) {
    var answer = [];
    var map= new Map();
    var mapped=name.map(function (val,index){
      
        return map.set(val,yearning[index])
    })
   photo.forEach((val)=>{
       var score=0;
        val.forEach((item)=>{
            if(map.has(item)){
                score+=map.get(item)
            }
           
              
        })
       answer.push(score);
    })
    return answer;
}