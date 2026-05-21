// ==============================
// 복습 1 - 컴포넌트
// ==============================



// 함수형 컴포넌트 생성
// props : 부모(App) 컴포넌트가 전달한 값들을 받음
function Text(props){

    // return 안에 화면에 출력할 JSX 작성
    return<>

        {/* div 스타일 적용 */}
        {/* React에서는 style 사용할 때 객체 형태로 작성 */}
        {/* {{ }} 중괄호 2개 사용하는 이유
            1번째 {} : 자바스크립트 사용
            2번째 {} : 객체 생성
        */}
        <div style={{color:props.color,fontWeight:"bold"}}>

            {/* a 태그 클릭 시 이벤트 실행 */}
            <a 
                href="/"

                // 클릭 이벤트
                onClick={e =>{

                    // a태그 기본 이동 기능 막기
                    e.preventDefault();

                    // 알림창 출력
                    alert("안녕")
                }} 
            > 

                {/* props로 받은 txt 출력 */}
                {props.txt}

            </a>

        </div>
    </>
}




// 메인 컴포넌트
function App(){

    // 함수 선언
    // 필요할 때 호출 가능
    let test=()=>{
        alert("안녕?")
    }

    return <>

        {/* 
            Text 컴포넌트 사용

            txt   : 출력할 문자
            color : 글자색
            onprint : 함수 전달
        */}

        <Text 
            txt="안녕하세요" 
            color="blue" 

            // 함수 전달
            onprint={()=>{
                alert("안녕")
            }} 
        ></Text>



        <Text 
            txt="반갑습니다" 
            color="orange" 

            // confirm 창 출력
            onprint={()=>{
                window.confirm("확인or취소")
            }}
        ></Text>



        {/* color만 보라색으로 변경 */}
        <Text 
            txt="ㅋㅋㅋㅋㅋ" 
            color="purple"
        ></Text> 

    </>
}


// 다른 파일에서 App 컴포넌트 사용할 수 있게 export
export default App;