import { useState } from "react"

function Sample(props) {
    return <>
        <h3>{props.txt}</h3>

        <button onClick={() => {
            props.onPrint(props.txt, props.kind);
        }}>
            클릭!
        </button>
    </>
}
function Sample2(props){
    return<>
    <h3>{props.txt}</h3>
    <button onClick={()=>{
        props.onPrint(props.txt,props.kind);
    }}>클릭!</button>
    </>
}

function App() {
    let [txt, setTxt] = useState("");
    let [kind, setKind] = useState("");

    function onPrint(txt, kind) {
        if (kind == "A") {
            alert(txt);
        } else if (kind == "B") {
            window.confirm(txt);
        } else if (kind == "C") {
            prompt(txt);
        } else {
            alert("몰라");
        }
    }

    return <>
        {
            txt != "" 
            ? <Sample txt={txt} kind={kind} onPrint={onPrint} />
            : null
        }

        <hr />

        <button onClick={() => {
            setTxt("A컴포넌트 호출");
            setKind("A");
        }}>
            A컴포넌트호출
        </button>

        <button onClick={() => {
            setTxt("B컴포넌트 호출");
            setKind("B");
        }}>
            B컴포넌트호출
        </button>

        <button onClick={() => {
            setTxt("C컴포넌트 호출");
            setKind("C");
        }}>
            C컴포넌트호출
        </button>

        <button onClick={() => {
            setTxt("");
            setKind("");
        }}>
            클리어
        </button>
    </>
}

export default App;