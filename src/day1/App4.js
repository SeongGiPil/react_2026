import { useState } from "react";

// useState 실습 1
function App(){
    let varNum = 1;
    let [stateNum, setNum] = useState(1);

    return <>
        {varNum}
        <button onClick={()=>{
            varNum++;
            console.log(varNum);
        }}>클릭!</button>
        <hr></hr>
        {stateNum}
        <button onClick={()=>{
            setNum(stateNum+1);
        }}>클릭22</button>
    </>
}

export default App;