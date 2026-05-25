// 복습 7

// A 컴포넌트
function A(props){
    return <>
        {/* 컴포넌트 안에서 직접 만든 함수 */}
        <button onClick={()=>{
            alert("함수111111111111");
        }}>
            함수1(직접작성)
        </button>

        <hr></hr>

        {/* props로 받은 함수가 있을 때만 버튼 출력 */}
        {props.onFunc != null ? 
            <button onClick={()=>{

                // 부모(App)에서 전달받은 함수 실행
                props.onFunc();

            }}>
                함수2(props로 받은 함수)
            </button> 
            : null
        }
    </>
}


// B 컴포넌트
function B(props){
    return <>
        <div>
            <a 
                href="/" 
                id="HelloReact" 
                onClick={(e)=>{

                    // a 태그 기본 이동 막기
                    e.preventDefault();

                    // 클릭한 태그의 id 출력
                    alert(e.target.id);

                }}
            >
                a태그!!!!!!!!
            </a>
        </div>

        <button onClick={()=>{

            // 부모(App)에서 받은 함수에 3, 5 전달
            props.onFunc(3, 5);

        }}>
            B컴포넌트 버튼
        </button>
    </>
}


// App 컴포넌트
function App(){

    function test1(){
        alert("React 정말 좋다!");
    }

    function test2(x, y){
        alert(x + y);
    }

    return <>
        <A onFunc={()=>{
            alert("React 진짜 재밌다!");
        }}></A>

        <div style={{margin : "20px"}}>
            ===============================================
        </div>

        <A onFunc={test1}></A>

        <div style={{margin : "20px"}}>
            ===============================================
        </div>

        <B onFunc={test2}></B>
    </>
}

export default App;