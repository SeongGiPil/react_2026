//useRef2

import { useEffect, useRef } from "react";

function App(){
    let idRef=useRef("");
    let pwdRef=useRef("");
   
    useEffect(()=>{
        idRef.current.focus();
    })
    return<>
    <div>
        <label>아이디:<input ref={idRef}></input></label>
    </div>
    <div>
        <label>비밀번호:<input type="password" ref={pwdRef}></input></label>
    </div>
    <button onClick={()=>{
        //아이디 test,비밀번호가 '1234'면 '로그인성공'출력
        // 아니면'로그인 실패'출력후 아이디input에focus
       let id=idRef.current.value;
       let pwd=pwdRef.current.value;
       if(id==="test" && pwd=="1234"){
        alert("로그인성공");
       }else{
        alert("로그인실패")
        idRef.current.focus();
       }
   }}>로그인!</button>
    </>
}

export default App;