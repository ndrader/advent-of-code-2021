var fs = require('fs');
var input = fs.readFileSync('./src/day1/input.in').toString().split("\n").map(item => parseInt(item, 10));



if(input.length < 4) console.log(0);

let result2 = 0;
for(let index = 2; index < input.length - 1; index++){
  let first = input[index - 2] + input[index - 1] + input[index];
  let second = input[index - 1] + input[index] + input[index + 1];
  if(second > first) result2++;
}

console.log(result2); 
