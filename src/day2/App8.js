// useState import
// React에서 상태값(state) 관리할 때 사용
import { useState } from "react";

function App(){

    // name : 현재 입력값 저장
    // setName : name 값을 변경하는 함수
    // 초기값은 빈 문자열("")
    let [name, setName] = useState("");


    return <>

        {/* 현재 입력값 출력 */}
        <div>{name}</div>


        <div>

            <input

                // input 값과 state 연결
                value={name}

                // 입력값 변경 시 실행
                onChange={(e)=>{

                    // 현재 입력값 저장
                    setName(e.target.value);

                }}
            >
            </input>

        </div>

    </>
}

export default App;