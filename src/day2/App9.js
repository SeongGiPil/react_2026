// useRef

// useRef, useState import
import { useRef, useState } from "react";

function App(){

    // 일반 변수
    // 값은 변경 가능하지만 렌더링 시 초기화됨
    let varNum = 1;


    // state 변수
    // 값이 변경되면 화면이 다시 렌더링됨
    let [stateNum, setNum] = useState(1);


    // ref 변수
    // 값은 유지되지만 화면은 자동으로 다시 렌더링되지 않음
    // current 안에 실제 값 저장
    let refNum = useRef(1);


    return <>

        {/* 일반 변수 출력 */}
        <h3>{varNum}</h3>

        <div>

            <button onClick={()=>{

                // 일반 변수 증가
                varNum += 1;

                // 콘솔에는 증가된 값 출력
                console.log(varNum);

                // 하지만 화면은 다시 렌더링되지 않음
                // 그래서 화면에는 계속 1이 보임

            }}>

                varNum 증가!

            </button>
        </div>



        <hr></hr>



        {/* state 값 출력 */}
        <h3>{stateNum}</h3>

        <div>

            <button onClick={()=>{

                // state 값 증가
                setNum(stateNum+1);

                // state 변경 시 React가 다시 렌더링함
                // 화면 숫자도 변경됨

            }}>

                stateNum 증가!

            </button>
        </div>



        <hr></hr>



        {/* ref 값 출력 */}
        <h3>{refNum.current}</h3>    

        <div>

            <button onClick={()=>{

                // ref 값 증가
                refNum.current += 1;

                // 콘솔에는 증가된 값 출력
                console.log(refNum.current);

                // 하지만 화면은 자동으로 다시 렌더링되지 않음
                // 그래서 화면 숫자는 그대로 보임

            }}>

                refNum 증가!

            </button>
        </div>

    </>
}

export default App;