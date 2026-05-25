// useEffect

// useEffect : 렌더링 이후 특정 작업 실행
// useState : 상태값(state) 관리
import { useEffect, useState } from "react";

function App(){

    // num1 상태값
    let [num1, setNum1] = useState(1);


    // num2 상태값
    let [num2, setNum2] = useState(1);


    // 일반 함수
    function list(){}


    // useEffect는 크게 3가지 형태 사용 가능


    // =====================================================
    // 1. DependencyList가 없는 경우
    // =====================================================

    // 렌더링 될 때마다 실행
    // state 변경 → 다시 렌더링 → useEffect 다시 실행

    /*
    useEffect(()=>{
        console.log("DependencyList 없는 useEffect!");
    });
    */



    // =====================================================
    // 2. DependencyList가 빈 배열([])인 경우
    // =====================================================

    // 최초 화면 로딩 시 1번만 실행

    /*
    useEffect(()=>{
        console.log("DependencyList 빈 값 useEffect!");
    }, []);
    */



    // =====================================================
    // 3. DependencyList 안에 값이 있는 경우
    // =====================================================

    // 배열 안의 값이 변경될 때만 실행
    // 여기서는 num1이 변경될 때 실행됨

    useEffect(()=>{

        console.log("DependencyList에 값이 있는 경우 useEffect!");

    }, [num1]);



    return <>

        {/* 현재 num1 값 출력 */}
        <div>num1 : {num1}</div>


        {/* 현재 num2 값 출력 */}
        <div>num2 : {num2}</div>


        <hr></hr>


        {/* 
            클릭 시 num1 증가
            num1 값이 바뀌므로 useEffect 실행됨
        */}
        <button onClick={()=>{

            setNum1(num1+1)

        }}>

            num1

        </button>



        {/* 
            클릭 시 num2 증가

            하지만 useEffect의 DependencyList에는
            num1만 들어있기 때문에 useEffect 실행 안됨
        */}
        <button onClick={()=>{

            setNum2(num2+1)

        }}>

            num2

        </button>
    </>
}

export default App;
