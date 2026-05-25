// 복습 3 - useState

// useState import
// React에서 값이 변경되면 화면을 다시 그리기 위해 사용
import { useState } from "react";

function App(){

    // 일반 변수
    // 값은 변경 가능하지만 화면은 다시 렌더링되지 않음
    let varNum = 1;


    // useState 사용
    // stateNum : 현재 값
    // setNum : stateNum 값을 변경하는 함수
    // useState(1) → 초기값 1
    let [stateNum, setNum] = useState(1);


    // 화면 출력
    return <>

        {/* 일반 변수 출력 */}
        <h3>{varNum}</h3>

        <div>

            {/* 버튼 클릭 시 실행 */}
            <button onClick={()=>{

                // varNum 값 증가
                varNum += 1;

                // 값은 바뀌지만
                // React가 화면을 다시 그리지 않음
                // 그래서 화면에는 그대로 1이 보임

            }}>

                varNum 증가!

            </button>
        </div>


        {/* 구분선 */}
        <hr></hr>


        {/* state 값 출력 */}
        <h3>{stateNum}</h3>

        <div>

            {/* 버튼 클릭 시 실행 */}
            <button onClick={()=>{

                // state 값 변경
                // setNum이 실행되면 React가 다시 렌더링함
                setNum(stateNum + 1);

            }}>

                stateNum 증가!

            </button>
        </div>
    </>
}


// 다른 파일에서 사용할 수 있도록 export
export default App;