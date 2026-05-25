// useRef : input 태그와 연결해서 값 제어
// useEffect : 렌더링 후 특정 작업 실행
import { useRef, useEffect } from "react";


// useParams : URL 파라미터 값 가져오기
import { useParams } from "react-router-dom";


function ProductEdit(){

    // URL 주소에서 productId 값 가져오기
    // 예시 : /product/edit/1
    // productId = 1
    let {productId} = useParams();


    // input 태그 연결용 ref
    let id = useRef("")
    let name = useRef("");
    let brand = useRef("");
    let price = useRef("");
    let desc = useRef("");


    // 제품 정보 조회 함수
    function getProduct(){

            // 서버에 제품 정보 요청
            fetch("http://localhost:3010/product/" + productId)

                // 응답 데이터를 JSON 형태로 변환
                .then(res => res.json())

                // 결과 처리
                .then(data => {

                    // 받아온 데이터를 input value에 저장
                    id.current.value = data.info.PRODUCT_ID;

                    name.current.value = data.info.PRODUCT_NAME;

                    brand.current.value = data.info.BRAND;

                    price.current.value = data.info.PRICE;

                    desc.current.value = data.info.DESCRIPTION;
                });
        }


    // 컴포넌트가 처음 실행될 때 1번 실행
    useEffect(()=>{

        // 제품 정보 조회 함수 호출
        getProduct();

    }, []);


    return <>

        {/* 제품 번호 input */}
        <div>
            번호 : <input ref={id}></input>
        </div>


        {/* 제품명 input */}
        <div>
            제품명 : <input ref={name}></input>
        </div>


        {/* 브랜드 input */}
        <div>
            브랜드 : <input ref={brand}></input>
        </div>


        {/* 가격 input */}
        <div>
            가격 : <input ref={price}></input>
        </div>


        {/* 설명 input */}
        <div>
            설명 : <input ref={desc}></input>
        </div>

    </>
}

export default ProductEdit;