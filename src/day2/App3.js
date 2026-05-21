import { useState } from "react";

// useState : 값이 바뀌면 자동 렌더링

function App(){

    // 일반 변수
    let varNum = 1;

    // state 변수
    let [stateNum, setNum] = useState(1);

    return <>
    
        <h2>일반 변수</h2>
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

        <h2>State 변수</h2>
        <h3>{stateNum}</h3>

        <div>
            <button onClick={()=>{
                setNum(stateNum + 1);
            }}>
                State 증가!
            </button>
        </div>

    </>
}

export default App;