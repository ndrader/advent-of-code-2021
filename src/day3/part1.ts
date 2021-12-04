// find most common bit in each position based on input - new binary number composed of most common bit in each pos results - gamma rate
// epsilon inverse binary number of gamma rate result
// convert both to dec and mult


//brute force approach

var fs = require('fs');
var input = fs.readFileSync('./src/day3/input.in').toString().split("\n").map(item => item.split('')).map(item => item.map(num => parseInt(num, 10)));

var counter = input[0].map(item => 0);

for (let index = 0; index < input.length; index++){
  for (let pos = 0; pos < input[index].length; pos++){
    if(input[index][pos] === 1) counter[pos]++;
    if(input[index][pos] === 0) counter[pos]--;
  }
}

var gammaBinary = counter.map(num => {
  return num > 0 ? 1 : 0;
});

var epsilonBinary = counter.map(num => {
  return num <= 0 ? 1 : 0;
});

var gamma = parseInt(gammaBinary.join(''), 2);
var epsilon = parseInt(epsilonBinary.join(''), 2);

console.log(gamma * epsilon);