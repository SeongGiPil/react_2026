// useEffect : 컴포넌트 실행 시 특정 작업 수행
// useState : 상태값 관리
import { useEffect, useState } from "react";


// CSS import
import '../../App.css';


// 페이지 이동용 Hook
import { useNavigate } from "react-router-dom";


function ProductList(){

    // list : 제품 목록 저장
    // setList : list 값 변경 함수
    let [list, setList] = useState([]);


    // 페이지 이동 함수
    let navigate = useNavigate();



    // 제품 목록 조회 함수
    function getList(){

        // 서버에 제품 목록 요청
        fetch("http://localhost:3010/product")

            // 응답 데이터를 JSON으로 변환
            .then(res => res.json())

            // 결과 처리
            .then(data => {

                // 서버에서 받은 list 저장
                setList(data.list);

            });
    }



    // 컴포넌트가 처음 실행될 때 1번 실행
    useEffect(()=>{

        // 제품 목록 조회
        getList();

    }, [])



    return <>

        {/* 제목 출력 */}
        <h2>제품 목록!</h2>

        <hr></hr>



        {/* 제품 등록 버튼 */}
        <div>

            <button onClick={()=>{

                // 제품 등록 페이지 이동
                navigate("/product/add");

            }}>

                제품등록

            </button>
        </div>



        <div>

            <table>

                {/* 테이블 제목 */}
                <tr>
                    <th>번호</th>
                    <th>제품명</th>
                    <th>브랜드</th>
                    <th>가격</th>
                    <th>수정</th>
                </tr>



                {/* list 배열 반복 */}
                {list.map(item => {

                    return <tr>

                        {/* 제품 번호 */}
                        <td>{item.PRODUCT_ID}</td>



                        {/* 제품명 */}
                        <td>

                            {/* 
                                a 태그 클릭 시 기본 이동 막기
                                상세 페이지 이동
                            */}
                            <a href="/" onClick={(e)=>{

                                // 기본 이동 막기
                                e.preventDefault();

                                // 상세 페이지 이동
                                navigate("/product/view/" + item.PRODUCT_ID);

                            }}>

                                {/* 제품명 출력 */}
                                {item.PRODUCT_NAME}

                            </a>

                        </td>



                        {/* 브랜드 */}
                        <td>{item.BRAND}</td>


                        {/* 가격 */}
                        <td>{item.PRICE}</td>



                        {/* 수정 버튼 */}
                        <td>

                            <button onClick={()=>{

                                // 수정 페이지 이동
                                navigate("/product/edit/" + item.PRODUCT_ID);

                            }}>

                                수정

                            </button>

                        </td>

                    </tr>
                })}
            </table>
        </div>
    </>
}

export default ProductList;