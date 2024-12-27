function solution(phone_number) {
    var answer = '';
    var last=phone_number.slice(-4);
    answer=last.padStart(phone_number.length,'*')
    return answer;
}