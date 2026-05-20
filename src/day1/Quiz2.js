import { useState } from "react"

function UserList(props) {
    return <>
        <ul>
            {props.list.map(item => {
                return <li key={item.userId}>{item.userName}</li>
            })}
        </ul>
    </>
}

function SubjectList(props) {
    return <>
        <table>
            <tr>
                <th>번호</th>
                <th>과목명</th>
                <th>책</th>
                <th>가격</th>
            </tr>
            {props.list.map(item => {
                return <tr key={item.subId}>
                    <td>{item.subId}</td>
                    <td>{item.subName}</td>
                    <td>{item.bookName}</td>
                    <td>{item.price}</td>
                </tr>
            })}
        </table>
    </>
}

function App() {
    let [menu, setMenu] = useState("clear");
    let users = [
        { userId: 'user01', userName: '홍길동', age: 30, addr: '인천' },
        { userId: 'user02', userName: '김철수', age: 25, addr: '서울' },
        { userId: 'user03', userName: '박영희', age: 20, addr: '제주도' }
    ]
    let subjects = [
        { subId: 1, subName: "java", bookName: "재밌는 자바!", price: 20000 },
        { subId: 2, subName: "html", bookName: "즐거운 HTML", price: 14000 },
        { subId: 3, subName: "oracle", bookName: "놀라운 오라클!", price: 26000 },
        { subId: 4, subName: "python", bookName: "그냥 파이썬", price: 18000 }
    ]
    return <>
        
        

        <div>
            <button onClick={() => {
                setMenu("user");
            }}>유저목록</button>
            <button onClick={() => {
                setMenu("subject")
            }}>과목목록</button>
            <button onClick={() => {
                setMenu("clear")
            }}>초기화</button>
        </div>
        <hr></hr>
        {menu == "user" ? <UserList list={users}></UserList> : menu == "subject" ? <SubjectList list={subjects}></SubjectList> : null}
    </>
}

export default App;