export {};
var fs = require('fs');
var input = fs.readFileSync('./src/day5/input.in').toString().split("\n").map(item => item.split(' -> ').map(i => i.split(',').map(el => parseInt(el))));

const part2 = () => {
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
      continue;
    }
    if(coords[0][1] === coords[1][1]){
      
      const smaller = Math.min(coords[0][0], coords[1][0]);
      const larger = Math.max(coords[0][0], coords[1][0]);
      for(let i = smaller; i < larger + 1; i++){
        const key = `${i}n${coords[0][1]}`;
        if(key in hits) hits[key] = hits[key] + 1;
        if(!(key in hits)) hits[key] = 1;
      }
      continue;
    }
    
    const smallerY = Math.min(coords[0][0], coords[1][0]);
    const largerY = Math.max(coords[0][0], coords[1][0]);
    const smallerX = Math.min(coords[0][1], coords[1][1]);
    const largerX = Math.max(coords[0][1], coords[1][1]);
    let indexX = smallerX;
    let indexY = smallerY;
    while((indexX <= largerX && indexX >= smallerX) && (indexY <= largerY && indexY >= smallerY)){
      console.log(indexX, largerX, smallerX, indexY, largerY, smallerY);
      const key = `${indexX}n${indexY}`;
      if(key in hits) hits[key] = hits[key] + 1;
      if(!(key in hits)) hits[key] = 1;
      indexX = largerX === coords[0][1] ? indexX - 1 : indexX + 1;
      indexY = largerY === coords[0][0] ? indexY - 1 : indexY + 1;
    }
  }
  //answer to small
  console.log(Object.values(hits).filter(hit => hit > 1).length);
}
part2();