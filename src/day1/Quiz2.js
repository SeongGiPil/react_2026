import { useState } from "react"

// 1. 최초 화면은 버튼 외 아무것도 없는 화면
// 2. '유저목록' 버튼 클릭 시 
//   UserList라는 컴포넌트 호출 -> 유저 이름을 ul태그 형태로 출력
// 3. '과목목록' 버튼 클릭 시
//   SubjectList 컴포넌트 호출 -> 과목 목록을 테이블 형태로 출력
// 4. 2,3번은 중복해서 출력 x
// 5. '초기화' 버튼 클릭 시 모든 컴포넌트 화면에서 지우기
//   -> 1번화면으로 

// == 컴포넌트 작성시에 함수 보내줘서 실행 == 
// 1. 책이름을 클릭하면 가격 alert창으로 출력

// 2. 이름을 클릭하면 
//  'ooo님의 나이는 oo입니다' alert 출력

function UserList(props){
    return <>
        <ul>
            {props.list.map(item => {
                return <li key={item.userId}>
                    <a href="/" onClick={e => {
                        e.preventDefault();
                        props.onPrint(item.userName, item.age);
                    }}>{item.userName}</a>
                </li>
            })}
        </ul>
    </>
}
function SubjectList(props){
    return <>
        <table>
            <tr>
                <th>번호</th>
                <th>과목명</th>
                <th>책이름</th>
                <th>가격</th>
            </tr>
            {props.list.map(item => {
                return <tr>
                    <td>{item.subId}</td>
                    <td>{item.subName}</td>
                    <td>
                        <a href="/" onClick={e => {
                            e.preventDefault();
                            props.onPrint(item.price);
                        }}>{item.bookName}</a>
                    </td>
                    <td>{item.price}</td>
                </tr>
            })}
            
        </table>
    </>
}


function App(){
    let [menu, setMenu] = useState("clear");
    let users = [
        {userId : 'user01', userName : '홍길동', age : 30, addr : '인천'},
        {userId : 'user02', userName : '김철수', age : 25, addr : '서울'},
        {userId : 'user03', userName : '박영희', age : 20, addr : '제주도'}
    ]
    let subjects = [
        {subId : 1, subName : "java", bookName : "재밌는 자바!", price: 20000},
        {subId : 2, subName : "html", bookName : "즐거운 HTML", price : 14000},
        {subId : 3, subName : "oracle", bookName : "놀라운 오라클!", price : 26000},
        {subId : 4, subName : "python", bookName : "그냥 파이썬", price : 18000}
    ]
    return <>
        <div>
            <button onClick={()=>{
                setMenu("user")
            }}>유저목록</button>
            <button onClick={()=>{
                setMenu("subject")
            }}>과목목록</button>
            <button onClick={()=>{
                setMenu("clear")
            }}>초기화</button>
        </div>
        <hr></hr>
        {menu == "user" ? 
            <UserList list={users} onPrint={(name, age)=>{
               alert(`${name}님의 나이는 ${age}입니다`);
            }}></UserList> : menu == "subject" ? 
            <SubjectList list={subjects} onPrint={(price)=>{
                alert(price + "원");     
            }} ></SubjectList> : null}
        {/* {menu == "user" ? <UserList list={users}></UserList> : ""}
        {menu == "subject" ? <SubjectList list={subjects}></SubjectList> : null} */}
        
    </>
}

export default App;