// 복습7

function A(props) {
    return <>
        <button>함수1(그냥 버튼)</button>

        <hr />

        <button onClick={() => {
            alert("함수 11111");
        }}>
            함수1(직접작성)
        </button>

        <hr />

        {
            props.onFunc != null
            ? <button onClick={() => {
                props.onFunc();
            }}>
                함수2(props로 받은 함수)
            </button>
            : null
        }
    </>
}

function B(props) {
    return <>
    <div>
        <a href="/"id="helloReact"onClick={()=>{}}></a>
        e.preventDefault();
        alert(e.target);
    </div>
    <button onclick={()=>{
        props.onFunc(3,5);
    }}>B컴포넌트버튼</button>
    
    </>
}

function App() {

    function text1() {
        alert("React 정말 싫다!")
    }
    function test2(x,y){
        alert(x+y);
    }

    return <>
        <A onFunc={() => {
            alert("react노잼")
        }} />

        <div>==========================</div>

        <A />
        <div>======================</div>
        <B onFunc={test2}></B>
    </>
}

export default App;