import { useState } from "react"


// A 컴포넌트
function A(){

    // h3 태그 출력
    return <h3>A컴포넌트!</h3>
}


// B 컴포넌트
function B(){

    // h3 태그 출력
    return <h3>B컴포넌트!</h3>
}


// C 컴포넌트
function C(){

    // h3 태그 출력
    return <h3>C컴포넌트!</h3>
}



function App(){

    // menu : 현재 선택된 메뉴 상태값
    // setMenu : menu 값을 변경하는 함수

    // 초기값은 "Clear"
    let [menu, setMenu] = useState("Clear");


    // 화면 출력
    return <>

        {/* 
            조건부 렌더링

            menu 값에 따라 다른 컴포넌트 출력

            menu == "A" → A컴포넌트 출력
            menu == "B" → B컴포넌트 출력
            menu == "C" → C컴포넌트 출력
            그 외 → 아무것도 출력 안함(null)
        */}
        {
            menu == "A"
            ? <A></A>

            : menu == "B"
            ? <B></B>

            : menu == "C"
            ? <C></C>

            : null
        }



        {/* 
            아래 방식으로도 가능

            각각 따로 조건 검사
        */}

        {/* 
        {menu == "A" ? <A></A> : null}
        {menu == "B" ? <B></B> : null}
        {menu == "C" ? <C></C> : null}
        */}



        {/* 구분선 */}
        <hr></hr>



        {/* 
            버튼 클릭 시 menu 값을 "A"로 변경
            → A 컴포넌트 출력
        */}
        <button onClick={()=>setMenu("A")}>

            A컴포넌트 호출

        </button>



        {/* 
            버튼 클릭 시 menu 값을 "B"로 변경
            → B 컴포넌트 출력
        */}
        <button onClick={()=>setMenu("B")}>

            B컴포넌트 호출

        </button>



        {/* 
            버튼 클릭 시 menu 값을 "C"로 변경
            → C 컴포넌트 출력
        */}
        <button onClick={()=>setMenu("C")}>

            C컴포넌트 호출

        </button>



        {/* 
            버튼 클릭 시 menu 값을 "Clear"로 변경
            → 아무 컴포넌트도 출력되지 않음
        */}
        <button onClick={()=>setMenu("Clear")}>

            클리어

        </button>

    </>
}


// 다른 파일에서 사용할 수 있도록 export
export default App;