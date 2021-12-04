//aim = depth calculation from part 1
//depth = aim * x on forward
//forward = same as part 1

//get the forward position and depth and multiply together

var fs = require('fs');
var input = fs.readFileSync('./src/day2/input.in').toString().split("\n").map(item => item.split(' ')).map(item => [item[0], parseInt(item[1], 10)]);

var forward = 0;
var depth = 0;
var aim = 0;
input.forEach(element => {
  if(element[0] === 'forward') {
    forward += element[1];
    depth += aim * element[1];
  }
  if(element[0] === 'down') aim += element[1];
  if(element[0] === 'up') aim -= element[1];
});

console.log(forward * depth);
