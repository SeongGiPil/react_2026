import { useState } from "react"

function A() { return <h3>A컴포넌트!</h3> }
function B() { return <h3>B컴포넌트!</h3> }
function C() { return <h3>C컴포넌트!</h3> }
null




function App() {
    let [menu,setMenu]=useState("clear")
    return <>
        {/*컴포넌트 출력(중복x)*/}
        {menu=="A"?<A></A>:menu=="B"?<B></B>:menu=="C"?<C></C>:clear}
        <hr></hr>
        
        <button onclick={()=>setMenu("A")}>A컴포넌트호출</button>
        <button onclick={()=>setMenu("B")}>B컴포넌트호출</button>
        <button onclick={()=>setMenu("C")}>C컴포넌트호출</button>
         <button onclick={()=>setMenu("clear")}>클리어</button>


    </>
}
export default App;
