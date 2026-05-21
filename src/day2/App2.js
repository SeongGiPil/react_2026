// 복습 2 - 컴포넌트 / 리스트 처리

// SubjectList 컴포넌트
// 부모(App)에서 props로 list 배열과 onPrint 함수를 전달받음
function SubjectList(props){

    // props.list는 App에서 전달한 subjects 배열
    // map은 배열을 반복하면서 새로운 배열을 만들어줌
    let newList = props.list.map(item => {
        return <li>{item.subName}</li>
    })

    // JSX 태그 배열이 출력됨
    console.log(newList);

    return <>
        <ol>
            {/* props.list 배열을 반복해서 li 태그 생성 */}
            {props.list.map(item => {
                return (
                    <li key={item.subId}>
                        {/* 
                            a 태그 클릭 시 실행
                            href="/"는 원래 페이지 이동을 발생시킴
                        */}
                        <a 
                            href="/" 
                            onClick={(e)=>{

                                // a 태그의 기본 이동 기능 막기
                                e.preventDefault();

                                // 부모(App)에서 받은 함수 실행
                                // item의 과목명, 책이름, 가격을 전달
                                props.onPrint(
                                    item.subName, 
                                    item.bookName, 
                                    item.price
                                );
                            }}
                        >
                            {/* 화면에 과목명 출력 */}
                            {item.subName}
                        </a>
                    </li>
                )
            })}
        </ol>
    </>
}



function App(){

    // 과목 데이터 배열
    let subjects = [
        {subId : 1, subName : "java", bookName : "재밌는 자바!", price: 20000},
        {subId : 2, subName : "html", bookName : "즐거운 HTML", price : 14000},
        {subId : 3, subName : "oracle", bookName : "놀라운 오라클!", price : 26000},
        {subId : 4, subName : "python", bookName : "그냥 파이썬", price : 18000}
    ]

    // 클릭 시 실행할 함수
    // SubjectList에서 props.onPrint로 호출됨
    let test = (subName, bookName, price) => {
         alert(`${subName}의 책 이름은 ${bookName} 입니다.`);
    }

    return <>

        {/* 
            첫 번째 SubjectList
            과목 클릭 시 책 이름 출력
        */}
        <SubjectList 
            list={subjects} 
            onPrint={test}
        ></SubjectList>



        {/* 
            두 번째 SubjectList
            같은 목록을 한 번 더 출력함
            과목 클릭 시 가격 출력
        */}
        <SubjectList 
            list={subjects} 
            onPrint={(subName, bookName, price)=>{
                alert(`${subName}의 책 가격은 ${price}원 입니다.`);
            }}
        ></SubjectList> 

    </>
}

// App 컴포넌트를 다른 파일에서 사용할 수 있게 내보냄
export default App;