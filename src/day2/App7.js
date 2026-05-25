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
        

        {/* 
            props.onFunc가 null이 아니면 버튼 출력
            즉, 부모(App)에서 함수를 넘겨줬을 때만 버튼 보임
        */}
        {props.onFunc != null ? 
            <button onClick={()=>{

                // 부모(App)에서 props로 받은 함수 실행
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
            {/* 
                a 태그 클릭 시 기본 이동 막기
                e.target.id는 클릭한 태그의 id 값
            */}
            <a href="/" id="HelloReact" onClick={(e)=>{

                // a 태그의 기본 기능인 페이지 이동 막기
                e.preventDefault();

                // 클릭한 태그의 id 출력
                alert(e.target.id);

            }}>
                a태그!!!!!!!!
            </a>
        </div>


        <button onClick={()=>{

            // 부모(App)에서 받은 함수 실행
            // 숫자 3, 5를 인자값으로 전달
            props.onFunc(3,5);

        }}>
            B컴포넌트 버튼
        </button>
    </>
}


// App 컴포넌트
function App(){

    // test1 함수
    // 실행하면 alert 출력
    function test1(){
        alert("React 정말 좋다!");
    }


    // test2 함수
    // x, y 값을 받아서 더한 결과 출력
    function test2(x, y){
        alert(x+y);
    }


    return <>

        {/* 
            A 컴포넌트 호출

            onFunc라는 이름으로 함수를 직접 만들어 전달
            A 안에서 props.onFunc()로 실행됨
        */}
        <A onFunc={()=>{
            alert("React 진짜 재밌다!")
        }}></A>


        <div style={{margin : "20px"}}>
            ===============================================
        </div>
        

        {/* 
            A 컴포넌트 호출

            미리 만들어둔 test1 함수를 전달
        */}
        <A onFunc={test1}></A>


        <div style={{margin : "20px"}}>
            ===============================================
        </div>


        {/* 
            B 컴포넌트 호출

            test2 함수를 전달
            B 안에서 props.onFunc(3,5) 실행
            결과 alert(8)
        */}
        <B onFunc={test2}></B>
    </>
}

export default App;