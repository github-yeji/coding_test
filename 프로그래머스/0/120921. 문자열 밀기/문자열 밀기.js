function solution(A, B) {
    var answer = 0;
    var i=0;
    var a_arr=A.split('');
    var b_arr=B.split('');
    while(true){
        
        
        if(a_arr.join('')!=b_arr.join('')){
            var letter=b_arr.shift();
            
            b_arr.push(letter);
          
            answer++
        }
        if(a_arr.join('')==b_arr.join('')){
            break;
        }
        if(i>b_arr.length&&a_arr.join('')!=b_arr.join('')){
            answer=-1;
            break;
        }
        i++;
    }
   
    return answer;
}