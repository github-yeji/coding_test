function solution(id_pw, db) {
    var answer = '';
    db.forEach((item)=>{
        if(item[0]==id_pw[0]&&item[1]==id_pw[1]){
            answer='login'
        }else if(item[0]==id_pw[0]){
            answer='wrong pw'
        }
    })
    if(answer==''){
        answer='fail'
    }
    return answer;
}