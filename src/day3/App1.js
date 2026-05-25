// 복습1 - useRef 

// useRef : DOM 요소 접근 / 값 저장
// useState : 상태값(state) 관리
import { useRef, useState } from "react";

function Test(){

    // 일반 변수
    // 렌더링될 때마다 다시 1로 초기화됨
    let varNum = 1;


    // state 변수
    // 값이 변경되면 화면 다시 렌더링
    let [stateNum, setNum] = useState(1);


    // ref 변수
    // 값은 유지되지만 화면 자동 렌더링 X
    let refNum = useRef(1);


    // input 태그 연결용 ref
    let nameRef = useRef("");


    return <>

        {/* 값 출력 */}
        <div>varNum : {varNum}</div>

        <div>stateNum : {stateNum}</div>

        {/* ref 값은 current 안에 저장 */}
        <div>refNum : {refNum.current}</div>

        <hr></hr>


        {/* 
            일반 변수 증가
            화면은 다시 렌더링되지 않음
        */}
        <button onClick={()=>{

            varNum += 1

        }}>

            varNum

        </button>



        {/* 
            state 값 증가
            React가 다시 렌더링함
        */}
        <button onClick={()=>{

            setNum(stateNum+1)

        }}>

            stateNum

        </button>



        {/* 
            ref 값 증가
            값은 유지되지만 화면은 자동 갱신 안됨
        */}
        <button onClick={()=>{

            refNum.current += 1

        }}>

            refNum

        </button>


        <hr></hr>



        {/* input 태그와 ref 연결 */}
        <input ref={nameRef}></input>


        <button onClick={()=>{

            // input에 입력한 값 출력
            console.log(nameRef.current.value);


            // 다시 input에 focus
            nameRef.current.focus();

        }}>

            inputRef

        </button>
    </>
}

export default Test;