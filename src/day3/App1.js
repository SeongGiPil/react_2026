// 복습1 - useRef 

// useRef : DOM 요소 접근 / 값 저장
// useState : 상태값(state) 관리
import { useRef, useState } from "react";

function Test(){

    // 일반 변수
    // 렌더링될 때마다 다시 초기화됨
    let varNum = 1;


    // state 변수
    // 값이 변경되면 화면 다시 렌더링
    let [stateNum, setNum] = useState(1);


    // ref 변수
    // 값은 유지되지만 화면 자동 렌더링은 안됨
    let refNum = useRef(1);


    // input 연결용 ref
    let nameRef = useRef("");


    return <>

        {/* 값 출력 */}
        <div>varNum : {varNum}</div>

        <div>stateNum : {stateNum}</div>

        <div>refNum : {refNum.current}</div>


        <hr></hr>


        {/* 일반 변수 증가 */}
        <button onClick={()=>{

            varNum += 1;

        }}>

            varNum

        </button>



        {/* state 값 증가 */}
        <button onClick={()=>{

            setNum(stateNum + 1);

        }}>

            stateNum

        </button>



        {/* ref 값 증가 */}
        <button onClick={()=>{

            refNum.current += 1;

        }}>

            refNum

        </button>



        <hr></hr>



        {/* input과 ref 연결 */}
        <input ref={nameRef}></input>


        <button onClick={()=>{

            // 입력값 출력
            console.log(nameRef.current.value);

            // 다시 input focus
            nameRef.current.focus();

        }}>

            inputRef

        </button>

    </>
}

export default Test;