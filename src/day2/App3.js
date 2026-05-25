// 복습 3 - useState

// useState import
// React에서 값이 변경되면 화면을 다시 렌더링하기 위해 사용
import { useState } from "react";

function App(){

    // 일반 변수
    // 값은 변경 가능하지만 화면은 다시 렌더링되지 않음
    let varNum = 1;


    // state 변수
    // stateNum : 현재 값
    // setNum : state 값을 변경하는 함수
    let [stateNum, setNum] = useState(1);


    return <>

        {/* 일반 변수 영역 */}
        <h2>일반 변수</h2>

        <h3>{varNum}</h3>

        <div>

            <button onClick={()=>{

                // 일반 변수 증가
                varNum += 1;

                // 콘솔에서 증가 확인 가능
                console.log(varNum);

                // 하지만 화면은 다시 렌더링되지 않음

            }}>

                varNum 증가!

            </button>

        </div>



        <hr />


        {/* state 변수 영역 */}
        <h2>State 변수</h2>

        <h3>{stateNum}</h3>

        <div>

            <button onClick={()=>{

                // state 값 증가
                // setNum 실행 시 자동 렌더링
                setNum(stateNum + 1);

            }}>

                State 증가!

            </button>

        </div>

    </>
}

export default App;