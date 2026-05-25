import { useState } from "react"

// Sample 컴포넌트
function Sample(props) {
    return <>
        <h3>{props.txt}</h3>

        <button onClick={() => {
            props.onPrint(props.txt);
        }}>
            클릭!
        </button>
    </>
}

// Sample2 컴포넌트
function Sample2(props) {
    return <>
        <h3>{props.txt}</h3>

        <button onClick={() => {
            props.onPrint(props.txt, props.kind);
        }}>
            클릭!
        </button>
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
        {txt != "" ?
            <Sample
                txt={txt}
                onPrint={
                    kind == "A"
                        ? (txt) => { alert(txt) }
                        : kind == "B"
                            ? (txt) => { window.confirm(txt) }
                            : (txt) => { prompt(txt) }
                }
            />
            : null
        }

        {txt != "" ?
            <Sample2
                txt={txt}
                kind={kind}
                onPrint={onPrint}
            />
            : null
        }

        <hr />

        <button onClick={() => {
            setTxt("A컴포넌트 호출");
            setKind("A");
        }}>
            A컴포넌트 호출
        </button>

        <button onClick={() => {
            setTxt("B컴포넌트 호출");
            setKind("B");
        }}>
            B컴포넌트 호출
        </button>

        <button onClick={() => {
            setTxt("C컴포넌트 호출");
            setKind("C");
        }}>
            C컴포넌트 호출
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