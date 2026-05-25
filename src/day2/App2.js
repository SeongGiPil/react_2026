// 복습 2 - 컴포넌트 / 리스트 처리


// 과목 목록 출력용 컴포넌트
function SubjectList(props){

    // map 함수 사용
    // props.list 배열을 li 태그 배열로 변경
    let newList = props.list.map(item => {

        // item 하나씩 꺼내서 li 생성
        return <li>{item.subName}</li>
    })

    // 콘솔에서 확인 가능
    // 실제로는 JSX 배열 형태로 저장됨
    console.log(newList);


    // 화면 출력
    return <>
    
        {/* 순서 있는 목록 */}
        <ol>

            {/* 
                props.list 배열 반복
                item에는 객체 하나씩 저장됨
            */}
            {props.list.map(item => {

                // key는 React가 리스트 구분할 때 사용
                return <li key={item.subId}>

                    {/* 
                        클릭 가능한 과목명
                        href="/" 기본 이동 막기 위해 preventDefault 사용
                    */}
                    <a href="/" onClick={(e)=>{

                        // 기본 페이지 이동 막기
                        e.preventDefault();

                        // 부모(App)로부터 전달받은 함수 실행
                        // 현재 item의 값 전달
                        props.onPrint(
                            item.subName,
                            item.bookName,
                            item.price
                        );

                    }}>

                        {/* 과목명 출력 */}
                        {item.subName}

                    </a>
                </li>
            })}
        </ol>
    </>
}



function App(){

    // 과목 데이터 배열
    let subjects = [

        // 객체 형태 데이터
        {subId : 1, subName : "java",   bookName : "재밌는 자바!", price: 20000},
        {subId : 2, subName : "html",   bookName : "즐거운 HTML",  price : 14000},
        {subId : 3, subName : "oracle", bookName : "놀라운 오라클!", price : 26000},
        {subId : 4, subName : "python", bookName : "그냥 파이썬", price : 18000}

    ]


    // 함수 생성
    // 클릭 시 실행될 함수
    let test = (subName, bookName, price) => {

         // 전달받은 값 사용
         alert(`${subName}의 책 이름은 ${bookName} 입니다.`);
    }


    // 화면 출력
    return <>

        {/* 
            SubjectList 컴포넌트 사용

            list = subjects 배열 전달
            onPrint = test 함수 전달

            클릭 시 책 이름 출력
        */}
        <SubjectList 
            list={subjects} 
            onPrint={test}>
        </SubjectList>



        {/* 
            두 번째 SubjectList

            이번에는 화살표 함수를 직접 전달
            클릭 시 가격 출력
        */}
        <SubjectList 
            list={subjects} 
            onPrint={(subName, bookName, price)=>{

                // 가격 출력
                alert(`${subName}의 책 가격은 ${price}원 입니다.`);
            }}>
        </SubjectList> 

    </>
}


// 다른 파일에서 사용할 수 있도록 export
export default App;