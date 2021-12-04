//get the forward position and depth and multiply together

var fs = require('fs');
var input = fs.readFileSync('./src/day2/input.in').toString().split("\n").map(item => item.split(' ')).map(item => [item[0], parseInt(item[1], 10)]);

let forward = 0;
let depth = 0;

input.forEach(element => {
  if(element[0] === 'forward') forward += element[1];
  if(element[0] === 'down') depth += element[1];
  if(element[0] === 'up') depth -= element[1];
});

console.log(forward * depth);
