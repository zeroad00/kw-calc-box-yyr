const lib = require("./lib");

// 충분한 parameter의 개수가 입력되지 않았을 경우
if(process.argv.length <= 3){
    console.log("Insufficient parameter!");
    process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));

// 수가 아니라면, parseFloat함수는 NaN값을 반환한다.
if(numbers.some((n) => isNaN(n))){
    console.log("Some arguments are not numbers!");
    process.exit(1);
}
let result;
switch (command) {
    case "avg":
        result = lib.avg(numbers);
        break;
    case "prime":
        result = lib.prime(numbers[0]);
        break;
    case "fact":
        result = lib.fact(numbers[0]);
        break;
    // avg, prime, fact가 입력되지 않았을 경우
    default:
        console.log("Wrong command!");
        process.exit(1);
}
console.log(result);

/*
exports.avg = avg;
exports.prime = prime;
exports.fact = fact;
*/