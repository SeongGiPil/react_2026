// useState import
// React에서 상태값(state) 관리할 때 사용
import { useState } from "react";


function App(){

    // name : 현재 입력값 저장
    // setName : name 값을 변경하는 함수
    // 초기값은 빈 문자열("")
    let [name, setName] = useState("");


    return <>

        {/* 현재 name 값 화면에 출력 */}
        <div>{name}</div>


        <div>

            {/* 입력창 */}
            <input

                // input의 value 값을 name과 연결
                // name 값이 바뀌면 input 값도 같이 변경됨
                value={name}


                // 입력값이 변경될 때마다 실행
                onChange={(e)=>{

                    // e.target.value
                    // 현재 input에 입력한 값

                    // 입력한 값을 state(name)에 저장
                    setName(e.target.value);

                }}>

            </input>
        </div>
    </>
}


// 다른 파일에서 사용할 수 있도록 export
export default App;