import { useState } from "react"

// Sample 컴포넌트
function Sample(props){
    return <>
        {/* 부모(App)에서 받은 txt 출력 */}
        <h3>{props.txt}</h3>

        <button onClick={()=>{

            // 부모(App)에서 받은 onPrint 함수 실행
            // props.txt 값을 넘겨줌
            props.onPrint(props.txt);

        }}>클릭!</button>
    </>
}

function Sample2(props){
    return <>
        {/* 부모(App)에서 받은 txt 출력 */}
        <h3>{props.txt}</h3>

        <button onClick={()=>{

            // 부모(App)에서 받은 onPrint 함수 실행
            // txt와 kind 값을 같이 넘겨줌
            props.onPrint(props.txt, props.kind);

        }}>클릭!</button>  
    </>
}

function App(){

    // txt : 화면에 출력할 문구 저장
    let [txt, setTxt] = useState(""); 

    // kind : A/B/C 중 어떤 버튼을 눌렀는지 저장
    let [kind, setKind] = useState("");
    

    // Sample2에서 사용할 함수
    // kind 값에 따라 alert / confirm / prompt 실행
    function qqq(txt, kind){

        if(kind == "A"){
            alert(txt);

        } else if(kind == "B"){
            window.confirm(txt);

        } else if (kind == "C"){
            prompt(txt);

        } else {
            alert("몰라");
        }
    }


    return <>

        {/* 
            txt가 비어있지 않으면 Sample 컴포넌트 출력
            txt가 ""이면 출력 안 함
        */}
        {txt != "" ? 
            <Sample 
                txt={txt}

                // kind 값에 따라 다른 함수를 props로 전달
                onPrint={
                    kind == "A" 
                    ? (txt)=>{alert(txt)} 
                    : kind == "B" 
                    ? (txt)=>{window.confirm(txt)} 
                    : (txt)=>{prompt(txt)}
                }>
            </Sample> 
            : null
        }


        {/* 
            txt가 비어있지 않으면 Sample2 컴포넌트 출력
            Sample2에는 txt, kind, qqq 함수 전달
        */}
        {txt != "" ? 
            <Sample2 
                txt={txt} 
                kind={kind} 
                onPrint={qqq}>
            </Sample2> 
            : null
        } 


        <hr></hr>


        {/* A 버튼 클릭 시 txt와 kind 변경 */}
        <button onClick={()=>{
            setTxt("A컴포넌트 호출");
            setKind("A");
        }}>A컴포넌트 호출</button>


        {/* B 버튼 클릭 시 txt와 kind 변경 */}
        <button onClick={()=>{
            setTxt("B컴포넌트 호출")
            setKind("B");
        }}>B컴포넌트 호출</button>


        {/* C 버튼 클릭 시 txt와 kind 변경 */}
        <button onClick={()=>{
            setTxt("C컴포넌트 호출")
            setKind("C");
        }}>C컴포넌트 호출</button>


        {/* 클리어 버튼 클릭 시 txt와 kind 초기화 */}
        <button onClick={()=>{
            setTxt("")
            setKind("");
        }}>클리어</button>

    </>
}

export default App;