function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}
function prime(num) {
    // input num is a prime
    for(let a=2; num>a; a++){
        if(num%a == 0){
            return false;
        }
    }
    return true;
}
function fact(num) {
    // num is up to 15
    if(num>15) return false;
    // TODO
    let result = 1;
    for(let a=2; a<=num; a++){
        result *= a;
    }
    return result;
}
module.exports = {
    avg,
    prime,
    fact
}
