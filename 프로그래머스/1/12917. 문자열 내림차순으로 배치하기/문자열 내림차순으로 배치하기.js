function solution(s) {
    var answer = '';
    var arr=s.split('');
    // arr=arr.sort(function (a, b) {
    //     return a-b;
    // })
    // answer=arr.join('')
    answer=arr.sort((a,b)=> a>b? -1:1).join('');
    return answer;
}