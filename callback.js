const add = (a,b)=>{
   return a+b;
}
//console.log(add(5,6));

const sub = (a,b)=>{
    return Math.abs(a-b);
 }
 //console.log(sub(5,6));

 const mul = (a,b)=>{
    return a*b;
 }
 //console.log(mul(5,6));

 const calculator = (num1,num2,operator)=>{
     return operator(num1,num2);
 }
 console.log(calculator(5,6,add)) ;
 console.log(calculator(5,6,sub)) ;
 console.log(calculator(5,6,mul)) ;