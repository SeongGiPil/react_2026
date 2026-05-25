<<<<<<< HEAD
// useRef : input 값 가져오기
import { useRef } from "react";


// useNavigate : 페이지 이동용 Hook
import { useNavigate } from "react-router-dom";


function ProductAdd(){

    // 페이지 이동 함수 생성
    let navigate = useNavigate();


    // 각각 input 태그와 연결할 ref 생성
    let id = useRef("");
    let name = useRef("");
    let brand = useRef("");
    let price = useRef("");
    let desc = useRef("");


    return <>

        {/* 제품 번호 입력 */}
        <div>
            번호 : <input ref={id}></input>
        </div>


        {/* 제품명 입력 */}
        <div>
            제품명 : <input ref={name}></input>
        </div>


        {/* 브랜드 입력 */}
        <div>
            브랜드 : <input ref={brand}></input>
        </div>


        {/* 가격 입력 */}
        <div>
            가격 : <input ref={price}></input>
        </div>


        {/* 설명 입력 */}
        <div>
            설명 : <input ref={desc}></input>
        </div>



        <div>

            {/* 등록 버튼 */}
            <button onClick={()=>{

                // 입력값을 객체 형태로 저장
                let product = {

                    id : id.current.value,
                    name : name.current.value,
                    brand : brand.current.value,
                    price : price.current.value,
                    desc : desc.current.value
                }


                // fetch 사용해서 서버로 데이터 전송
                fetch("http://localhost:3010/product", {

                    // POST 방식 요청
                    method : "POST",

                    // JSON 형식이라고 서버에 알려줌
                    headers : {
                        "Content-type" : "application/json"
                    },

                    // 객체를 JSON 문자열로 변환해서 전송
                    body : JSON.stringify(product)

                })

                    // 서버 응답을 JSON 형태로 변환
                    .then(res => res.json())

                    // 결과 처리
                    .then(data => {

                        // 저장 완료 메시지 출력
                        alert("저장 됨");


                        // 제품 목록 페이지로 이동
                        navigate("/product/list");

                    })

            }}>

                등록!

            </button>
        </div>
    </>
}

export default ProductAdd;



