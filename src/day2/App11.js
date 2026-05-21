
// ****reacthoot과 관련된내용찾아보기
// import { useRef, useState } from "react";

// //복습
// function SubjectAdd(props){
//     let subName=useRef("");
//     let bookName=useRef("");
//     let price=useRef("");
    
//     return <>
    
//         <div>
//         subId:props.list.length+1,
//         subName:subName.current.value,
//         bookName:bookName.current.value,
//         price:price.current.value
//         };
//         props.list.push(subject);
//         props.setSubjects(props.list);
//            }}> 추가</button>
//         </div>
//     </>
// }
// function SubjectView(props){
//     return<>
//         <ul>
//             {props.list.map(item=> {
//                 return<li key={item.subId}>{item.subName}:{item.bookName}</li>
//             })}
//         </ul>
//     </>
// }
// function App(){
//     let[menu,setMenu]=useState("");
//     let [subjects,setSubjects]=useState([
//         {subId : 1, subName : "java", bookName : "재밌는 자바!", price: 20000},
//         {subId : 2, subName : "html", bookName : "즐거운 HTML", price : 14000},
//         {subId : 3, subName : "oracle", bookName : "놀라운 오라클!", price : 26000},
//         {subId : 4, subName : "python", bookName : "그냥 파이썬", price : 18000}
//     ]);

//     return <>
//     <button onclick={()=>{
//         setMenu("ADD");
//     }}>과목추가</button>
//     <button onclick={()=>{
//         setMenu("VIEW")
//     }}>확인</button>
//       <hr></hr>
//       {menu=="Add"?<SubjectAdd list={subjects}></SubjectAdd>:null}
//        {menu=="View"?<SubjectAdd list={subjects}></SubjectAdd>:null}


//     </>
// }

// export default App;