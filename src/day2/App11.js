// 복습

// useRef : input 값을 직접 가져올 때 사용
// useState : 화면에 보여줄 상태값 관리
import { useRef, useState } from "react";


// 과목 추가 컴포넌트
function SubjectAdd(props){

    // 각각 input 태그와 연결할 ref
    let subName = useRef("");
    let bookName = useRef("");
    let price = useRef("");

    return <>
        <div>
            {/* 과목명 input 연결 */}
            <label>과목명 : <input ref={subName}></input></label>
        </div>

        <div>
            {/* 책이름 input 연결 */}
            <label>책이름 : <input ref={bookName}></input></label>
        </div>

        <div>
            {/* 가격 input 연결 */}
            <label>가격 : <input ref={price}></input></label>
        </div>

        <div>
            <button onClick={()=>{

                // input에 입력한 값을 객체로 저장
                let subject = {
                    subId : props.list.length + 1,
                    subName : subName.current.value,
                    bookName : bookName.current.value,
                    price : price.current.value
                };

                // 기존 배열에 subject 추가
                // 단, push는 원본 배열을 직접 수정함
                props.list.push(subject);

                // 변경된 배열을 state에 저장
                props.setSbujects(props.list);

            }}>추가</button>
        </div>
    </>
}


// 과목 목록 출력 컴포넌트
function SubjectView(props){
    return <>
        <ul>
            {/* list 배열 반복 출력 */}
            {props.list.map(item => {
                return (
                    <li key={item.subId}>
                        {item.subName} : {item.bookName}
                    </li>
                )
            })}
        </ul>
    </>
}


function App(){

    // menu : 현재 화면 상태
    // ADD면 과목 추가 화면, VIEW면 목록 화면
    let [menu, setMenu] = useState("");


    // subjects : 과목 배열 상태값
    // setSbujects : subjects 변경 함수
    let [subjects, setSbujects] = useState([
        {subId : 1, subName : "java", bookName : "재밌는 자바!", price: 20000},
        {subId : 2, subName : "html", bookName : "즐거운 HTML", price : 14000},
        {subId : 3, subName : "oracle", bookName : "놀라운 오라클!", price : 26000},
        {subId : 4, subName : "python", bookName : "그냥 파이썬", price : 18000}
    ]);
    

    return <>
        {/* 클릭 시 과목 추가 화면 출력 */}
        <button onClick={()=>{
           setMenu("ADD");
        }}>과목 추가</button>


        {/* 클릭 시 과목 목록 확인 화면 출력 */}
        <button onClick={()=>{
            setMenu("VIEW");
        }}>확인</button>


        <hr></hr>


        {/* menu가 ADD이면 SubjectAdd 출력 */}
        {menu == "ADD" ? 
            <SubjectAdd 
                list={subjects} 
                setSbujects={setSbujects}>
            </SubjectAdd> 
            : null
        }


        {/* menu가 VIEW이면 SubjectView 출력 */}
        {menu == "VIEW" ? 
            <SubjectView list={subjects}></SubjectView> 
            : null
        }
    </>
}

export default App;