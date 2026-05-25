// 복습 4 -- useState 문제

// useState import
// React에서 상태(state) 관리할 때 사용
import { useState } from "react";

function App(){

    // num : 현재 숫자 상태값
    // setNum : num 값을 변경하는 함수
    // 초기값은 1
    let [num, setNum] = useState(1);
    

    // 감소 함수 생성
    let decreaseNum = ()=>{

        // num이 0보다 클 때만 감소
        // 0 미만으로 내려가는 것 방지
        if(num > 0){

            // num 값 1 감소
            setNum(num-1);
        }
    }


    // 화면 출력
    return <>

        {/* 
            삼항 연산자 사용

            num이 5 이상이면 "큰 수"
            아니면 "작은 수" 출력
        */}
        {num >= 5 ? "큰 수" : "작은 수"}

        
        {/* 구분선 */}
        <hr></hr>


        {/* 현재 숫자 출력 */}
        {num}


        {/* 
            증가 버튼

            클릭 시 num 값 1 증가
        */} 
        <button onClick={()=>{

            // 현재 값 +1
            setNum(num+1);

        }}>

            증가

        </button>



        {/* 
            감소 버튼

            클릭 시 decreaseNum 함수 실행
        */} 
        <button onClick={decreaseNum}>

            감소

        </button>

    </>
}


// 다른 파일에서 사용할 수 있도록 export
export default App;