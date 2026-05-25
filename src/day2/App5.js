import { useState } from "react"


// A 컴포넌트
function A() {

    return <h3>A컴포넌트!</h3>

}


// B 컴포넌트
function B() {

    return <h3>B컴포넌트!</h3>

}


// C 컴포넌트
function C() {

    return <h3>C컴포넌트!</h3>

}



function App() {

    // menu 상태값
    let [menu, setMenu] = useState("Clear");


    return <>

        {/* 
            조건부 렌더링

            menu 값에 따라 컴포넌트 출력
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


        <hr></hr>


        {/* A 컴포넌트 출력 */}
        <button onClick={()=>setMenu("A")}>

            A컴포넌트 호출

        </button>



        {/* B 컴포넌트 출력 */}
        <button onClick={()=>setMenu("B")}>

            B컴포넌트 호출

        </button>



        {/* C 컴포넌트 출력 */}
        <button onClick={()=>setMenu("C")}>

            C컴포넌트 호출

        </button>



        {/* 화면 초기화 */}
        <button onClick={()=>setMenu("Clear")}>

            클리어

        </button>

    </>
}

export default App;