// useRef 2

import { useEffect, useRef } from "react";

function App(){

    // 아이디 input 연결용 ref
    let idRef = useRef("");

    // 비밀번호 input 연결용 ref
    let pwdRef = useRef("");

    // 처음 화면이 렌더링되면 아이디 input에 focus
    useEffect(()=>{
        idRef.current.focus();
    }, []);

    return <>
        <div>
            <label>
                아이디 : <input id="userId" ref={idRef}></input>
            </label>
        </div>

        <div>
            <label>
                비밀번호 : <input ref={pwdRef} type="password"></input>
            </label>
        </div>

        <button onClick={()=>{

            // input에 입력한 값 가져오기
            let id = idRef.current.value;
            let pwd = pwdRef.current.value;

            // 아이디 test, 비밀번호 1234면 성공
            if(id === "test" && pwd === "1234"){
                alert("로그인 성공");
            } else {
                alert("로그인 실패");
                idRef.current.focus();
            }

        }}>
            로그인
        </button>
    </>
}

export default App;