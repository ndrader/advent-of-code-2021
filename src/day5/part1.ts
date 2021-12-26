var fs = require('fs');
var input = fs.readFileSync('./src/day5/input.in').toString().split("\n").map(item => item.split(' -> ').map(i => i.split(',').map(el => parseInt(el))));

const part1 = () => {
  let hits = {};
  for(const coords of input){
    if(coords[0][0] === coords[1][0]){
      const smaller = Math.min(coords[0][1], coords[1][1]);
      const larger = Math.max(coords[0][1], coords[1][1]);
      
      for(let i = smaller; i < larger + 1; i++){
        const key = `${coords[0][0]}n${i}`;
        if(key in hits) hits[key] = hits[key] + 1;
        if(!(key in hits)) hits[key] = 1;
      }
    }
    if(coords[0][1] === coords[1][1]){
      const smaller = Math.min(coords[0][0], coords[1][0]);
      const larger = Math.max(coords[0][0], coords[1][0]);
      for(let i = smaller; i < larger + 1; i++){
        const key = `${i}n${coords[0][1]}`;
        if(key in hits) hits[key] = hits[key] + 1;
        if(!(key in hits)) hits[key] = 1;
      }
    }
  }
  console.log(Object.values(hits).filter(hit => hit > 1).length);
}
part1();