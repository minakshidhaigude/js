const test = ()=>{
    let a = 55;
    let b = 20;
    let c = a;
    a = b;
    b = c;
    console.log("a is"+ a);
    console.log("b is"+ b);
}
test();