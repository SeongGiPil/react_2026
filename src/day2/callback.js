// calc 함수 생성

// cb : callback 함수
// x, y : 숫자값
function calc(cb, x, y){

    // 전달받은 함수 실행
    // 예: cb(3,5)
    cb(x,y);
}



// 화살표 함수 생성
// 두 숫자를 더한 결과 리턴
let sumFunc = (x, y) => {

    return x+y;
}



// calc 함수 호출

// cb 자리에 sumFunc 전달
// 결국 sumFunc(3,5) 실행됨
let num = calc(sumFunc, 3, 5);



// calc 함수 호출

// 이번에는 함수를 직접 작성해서 전달
// x-y 계산 후 결과 리턴
let num2 = calc((x, y)=>{

    return x-y;

}, 10, 5)