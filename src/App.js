// App.css 파일 가져오기 (디자인용 CSS)
import './App.css';

// component 폴더 안에 있는 컴포넌트 가져오기
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';



/* =========================
   실습1 컴포넌트
========================= */
function 실습1() {

  // 화면에 출력할 JSX
  return <>

    {/* Header 컴포넌트 사용 */}
    {/* title, subTitle 값을 props로 전달 */}
    <Header title="헤더!" subTitle="HaHa"></Header>

    <Header title="ㅋㅋㅋㅋㅋㅋ"></Header>

    <Header title="react재밌다"></Header>


    {/* HTML 기본 태그 */}
    <main></main>


    {/* 현재는 HTML footer 태그 */}
    {/* Footer 컴포넌트가 아님 */}
    <footer footer="집가고싶다"></footer>


    {/* 제목 */}
    <h2>헤더영역!</h2>


    {/* 목록 영역 */}
    <div>
      <ol>

        {/* 리스트 출력 */}
        <li>자바</li>
        <li>오라클</li>
        <li>html</li>

      </ol>
    </div>


    {/* 푸터 글자 */}
    <div>푸터영역!!</div>

  </>
    ;
}

function 실습2(){
   // 회원 목록 배열
  // 객체(JSON) 여러개 저장
  let userList = [

    {
      userId: 'user01',
      userName: '홍길동',
      age: 30,
      addr: '인천'
    },

    {
      userId: 'user02',
      userName: '김철수',
      age: 25,
      addr: '서울'
    },

    {
      userId: 'user03',
      userName: '박영희',
      age: 20,
      addr: '제주도'
    }

  ]


  // li 태그 저장용 배열
  let list = [];

  // 회원 수만큼 반복
  for (let i = 0; i < userList.length; i++) {

    // li 태그 추가
    // 회원 이름 출력
    list.push(<li>{userList[i].userName}</li>
    );

  }
  let newLust=userList.map(item=>{
    return<li key={item.userId}>{item.userName}</li>
  })


  // 화면 출력
  return <>

    {/* 생성한 ol목록 출력 */}
    <ol>
      {list}
    </ol>

  </>
    ;
}

function App(){
  let numList=[1,3,5,2];

  let newList=numList.map(item=>{
    return item*2; //[2,6,10,4]
  });
}
export default App;








