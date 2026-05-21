// 복습2-컴포넌트

//map함수는 리턴된결과로 새로운함수를 만든다
function subjectList(props) {
   console.log(props.List)
   let newList=props.list.map(item=>{
    return<li> {item.subName}</li>
   })
    


function App() {
    let subjects = [
        { subId: 1, subName: "java", bookName: "재밌는 자바!", price: 20000 },
        { subId: 2, subName: "html", bookName: "즐거운 HTML", price: 14000 },
        { subId: 3, subName: "oracle", bookName: "놀라운 오라클!", price: 26000 },
        { subId: 4, subName: "python", bookName: "그냥 파이썬", price: 18000 }
    ]
    return <></>
    <SubjectList list={subjects}>
    </SubjectList>

}
