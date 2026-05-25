// useRef

// useRef, useState import
import { useRef, useState } from "react";

function App(){

    // 일반 변수
    // 값은 변경 가능하지만 화면은 다시 렌더링되지 않음
    let varNum = 1;


    // state 변수
    // 값이 변경되면 화면이 다시 렌더링됨
    let [stateNum, setNum] = useState(1);


    // ref 변수
    // 값은 유지되지만 화면은 자동으로 다시 렌더링되지 않음
    let refNum = useRef(1);


    return <>

        {/* 일반 변수 출력 */}
        <h3>{varNum}</h3>

        <div>
            <button onClick={()=>{

                varNum += 1;
                console.log(varNum);

            }}>
                varNum 증가!
            </button>
        </div>


        <hr />


        {/* state 값 출력 */}
        <h2>State 변수</h2>
        <h3>{stateNum}</h3>

        <div>
            <button onClick={()=>{

                setNum(stateNum + 1);

            }}>
                State 증가!
            </button>
        </div>


        <hr />


        {/* ref 값 출력 */}
        <h3>{refNum.current}</h3>

        <div>
            <button onClick={()=>{

                refNum.current += 1;
                console.log(refNum.current);

            }}>
                refNum 증가!
            </button>
        </div>

    </>
}

export default App;