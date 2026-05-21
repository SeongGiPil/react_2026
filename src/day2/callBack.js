function calc(cb, x, y){
    cb(x,y);
}
let sumFunc = (x, y) => {
    return x+y;
}
let num = calc(sumFunc, 3, 5);
let num2 = calc((x, y)=>{
    return x-y;
}, 10, 5)