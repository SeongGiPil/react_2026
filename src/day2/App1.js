// 복습 1 - 컴포넌트

// Text라는 컴포넌트 생성
// props : 부모(App)로부터 전달받는 값
function Text(props){

    // JSX 반환
    return <>

        {/* div 스타일 적용 */}
        {/* props.color 값을 받아 글자색 변경 */}
        <div style={{color : props.color, fontWeight : "bold"}}>

            {/* a 태그 클릭 시 페이지 이동 막고 함수 실행 */}
            <a href="/" onClick={e => {

                // a 태그 기본 기능(페이지 이동) 막기
                e.preventDefault();

                // 부모에게 전달받은 함수 실행
                // onPrint 안에는 alert, confirm, prompt 등이 들어감
                props.onPrint();

            }}>

                {/* 부모에게 전달받은 txt 출력 */}
                {props.txt}

            </a>
        </div>
    </>
}

function App(){

    // test 함수 생성
    // alert 창 출력용 함수
    let test = () => {
        alert("안녕?")
    }

    // 화면 출력
    return <>

        {/* 
            Text 컴포넌트 사용
            txt : 출력할 글자
            color : 글자색
            onPrint : 클릭 시 실행할 함수
        */}

        <Text 
            txt="안녕하세요" 
            color="blue" 
            onPrint={test}>
        </Text>

        {/* 
            클릭하면 confirm 창 실행
            화살표 함수 직접 전달
        */}
        <Text 
            txt="반갑습니다" 
            color="orange" 
            onPrint={()=>{
                window.confirm("확인 or 취소");
            }}>
        </Text>

        {/* 
            클릭하면 prompt 창 실행
            입력창 띄우기
        */}
        <Text 
            txt="ㅋㅋㅋㅋㅋ" 
            color="purple" 
            onPrint={()=>{
                prompt("숫자 입력 : ");
            }}>
        </Text>

    </>
}

// App 컴포넌트를 다른 파일에서 사용할 수 있게 export
export default App;