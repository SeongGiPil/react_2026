// 복습 2 - 컴포넌트 / 리스트 처리

// SubjectList 컴포넌트
function SubjectList(props){

    // 배열 반복해서 JSX 배열 생성
    let newList = props.list.map(item => {
        return <li>{item.subName}</li>
    });

    console.log(newList);

    return <>
        <ol>

            {/* 과목 목록 반복 */}
            {props.list.map(item => {

                return (
                    <li key={item.subId}>

                        <a
                            href="/"
                            onClick={(e)=>{

                                // 기본 이동 막기
                                e.preventDefault();

                                // 부모 함수 실행
                                props.onPrint(
                                    item.subName,
                                    item.bookName,
                                    item.price
                                );

                            }}
                        >

                            {/* 과목명 출력 */}
                            {item.subName}

                        </a>

                    </li>
                )
            })}
        </ol>
    </>
}



function App(){

    // 과목 배열
    let subjects = [

        {
            subId : 1,
            subName : "java",
            bookName : "재밌는 자바!",
            price : 20000
        },

        {
            subId : 2,
            subName : "html",
            bookName : "즐거운 HTML",
            price : 14000
        },

        {
            subId : 3,
            subName : "oracle",
            bookName : "놀라운 오라클!",
            price : 26000
        },

        {
            subId : 4,
            subName : "python",
            bookName : "그냥 파이썬",
            price : 18000
        }
    ];


    // 책 이름 출력 함수
    let test = (subName, bookName, price) => {

        alert(`${subName}의 책 이름은 ${bookName} 입니다.`);

    };


    return <>

        {/* 책 이름 출력 */}
        <SubjectList
            list={subjects}
            onPrint={test}
        ></SubjectList>



        {/* 가격 출력 */}
        <SubjectList
            list={subjects}
            onPrint={(subName, bookName, price)=>{

                alert(`${subName}의 책 가격은 ${price}원 입니다.`);

            }}
        ></SubjectList>

    </>
}

export default App;