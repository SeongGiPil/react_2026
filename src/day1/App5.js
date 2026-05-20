// React의 useState 가져오기
// 상태(state)값 관리할 때 사용
import { useState } from "react";



/* =========================
   Test 컴포넌트
========================= */
function Test(props){

    return(

        <>

            {/* props로 전달받은 contents 출력 */}
            <h3>
                {props.contents}
            </h3>

        </>

    )
}



/* =========================
   App 컴포넌트
========================= */
function App(){

    // toggle 상태값 생성
    // 기본값(true)
    let [toggle,setToggle] = useState(true);


    // 화면 출력
    return(

        <>

            {/* style 속성은 객체 형태로 작성 */}
            <div

                style={{

                    // toggle이 true면 파란색
                    // false면 초록색
                    color : toggle ? "blue" : "green",

                    // 글자 굵게
                    fontWeight : "bold"

                }}
            >

                버튼영역

            </div>



            {/* 버튼 클릭 이벤트 */}
            <button

                onClick={()=>{

                    // 현재 상태값 반대로 변경
                    // true → false
                    // false → true
                    setToggle(!toggle);

                }}

            >

                클릭

            </button>



            {/* 구분선 */}
            <hr></hr>



            {/* 조건부 출력 */}
            {

                // toggle이 true면
                toggle ?

                // 자바 출력
                <Test contents="자바!!"></Test>

                :

                // false면 오라클 출력
                <Test contents="오라클!!"></Test>

            }

        </>

    )
}



// 다른 파일에서도 App 사용 가능하게 export
export default App;