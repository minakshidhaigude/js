let arr = [5,4,3];
let sum = arr.reduce((accum, curr)=>{
   return accum+curr;
})
//console.log(sum);
let avg = arr.reduce((accum,curval,index,array)=>{
  let total = accum+curval;
  if(index===arr.length-1)
  {
      return total/arr.length;
  }
  return total;
})
console.log(avg);