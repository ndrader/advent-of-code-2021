//life support rating = oxygen generator rating * CO2 scrubber rating

var fs = require('fs');
var input = fs.readFileSync('./src/day3/input.in').toString().split("\n").map(item => item.split('')).map(item => item.map(num => parseInt(num, 10)));

const findMostCommonBitInEach = (input: number[][]): number[] => {
  var counter = input[0].map(item => 0);

  for (let index = 0; index < input.length; index++){
    for (let pos = 0; pos < input[index].length; pos++){
      if(input[index][pos] === 1) counter[pos]++;
      if(input[index][pos] === 0) counter[pos]--;
    }
  }
  
  return counter.map(num => num >= 0 ? 1 : 0);
}

const findLeastCommon = (input: number[][]): number[] => {
  const mostCommon = findMostCommonBitInEach([...input]);
  return mostCommon.map(num => num === 0 ? 1 : 0);
}


const oxygenGenRating = (input: number[][]): number[] | undefined => {
  let mostCommon = findMostCommonBitInEach([...input]);
  let result = [...input];

  for(let index = 0; index < mostCommon.length; index++){
    if(result.length <= 1) return result?.[0];
    mostCommon = findMostCommonBitInEach([...result]);
    result = result.filter(item => item[index] === mostCommon[index]);
  }

  return result?.[0];
}

const co2ScrubberRating = (input: number[][]): number[] => {
  let leastCommon = findLeastCommon([...input]);
  
  let result = [...input];
  
  for(let index = 0; index < leastCommon.length; index++){
    if(result.length <= 1) return result?.[0];
    leastCommon = findLeastCommon([...result]);
    result = result.filter(item => item[index] === leastCommon[index]);
  }

  return result?.[0];
}
const oxygen = parseInt(oxygenGenRating([...input]).join(''), 2);
const co2 = parseInt(co2ScrubberRating([...input]).join(''), 2);

console.log(oxygen * co2);