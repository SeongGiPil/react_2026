import { useState } from "react";

//useState실습1
function App(){
   let varNum=1;
    let[stateNum,setNum]=useState(1);
    return<>
    {varNum}
    //함수만들어, 함수내부에서 num을 1씩증가
    <button onClick={()=>{
        Num++;
        console.log(num);
    }}>클릭!</button>
    <hr></hr>
    {num}
    <button onClick={()=>{
        setNum(Num+1);
    }}>클릭22</button>

    </>
}
export default App();