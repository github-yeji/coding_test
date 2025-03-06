function solution(arr1, arr2) {
    var answer = [[]];
    answer=arr1;
    // arr1.forEach((item,i)=>{
    //     item.forEach((val,j)=>{
    //         answer[i][j]=val;
    //     })
    // })
     arr2.forEach((item,i)=>{
        item.forEach((val,j)=>{
            answer[i][j]+=val;
        })
    })
    return answer;
}