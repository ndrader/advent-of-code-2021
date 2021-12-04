var fs = require('fs');
var input = fs.readFileSync('./src/day1/input.in').toString().split("\n").map(item => parseInt(item, 10));

let result = 0;
input.forEach((element, index) => {
  if(index === 0) return;
  if(element > input[index-1]) result++;
});

console.log(result);
