// useRef 2

// useEffect, useRef import
import { useEffect, useRef } from "react";

function App(){

    // 아이디 input 연결용 ref
    let idRef = useRef("");


    // 비밀번호 input 연결용 ref
    let pwdRef = useRef("");


    // 컴포넌트가 렌더링될 때 실행
    useEffect(()=>{

        // 아이디 input에 자동 focus
        idRef.current.focus();

    })


    return <>

        <div>

            {/* 
                ref={idRef}
                현재 input 태그를 idRef와 연결
            */}
            <label>
                아이디 : 

                <input 
                    id="userId" 
                    ref={idRef}>
                </input>

            </label>
        </div>



        <div>

            {/* 
                비밀번호 입력창
                type="password" → 입력값 숨김 처리
            */}
            <label>
                비밀번호 : 

                <input 
                    ref={pwdRef} 
                    type="password">
                </input>

            </label>
        </div>



        {/* 로그인 버튼 */}
        <button onClick={()=>{

            // input에 입력한 값 가져오기
            let id = idRef.current.value;
            let pwd = pwdRef.current.value;


            // 아이디와 비밀번호 검사
            if(id === "test" && pwd === "1234"){

                // 둘 다 맞으면 성공
                alert("로그인 성공");

            } else {

                // 하나라도 틀리면 실패
                alert("로그인 실패");

                // 다시 아이디 input으로 focus 이동
                idRef.current.focus();
            }

        }}>

            로그인

        </button>
    </>
}

export default App;