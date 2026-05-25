// useEffect : 컴포넌트 실행 시 특정 작업 수행
// useState : 상태값(state) 관리
import { useEffect, useState } from "react";


// useParams : URL 파라미터 값 가져오기
import { useParams } from "react-router-dom";


function ProductView(){

    // URL 주소에서 productId 값 가져오기
    // 예: /product/view/1
    let { productId } = useParams();


    // 제품 정보 저장용 state
    // 초기값은 빈 객체 {}
    let [info, setInfo] = useState({});



    // 제품 정보 조회 함수
    function getProduct(){

        // 서버에 제품 정보 요청
        fetch("http://localhost:3010/product/" + productId)

            // 응답 데이터를 JSON 형태로 변환
            .then(res => res.json())

            // 결과 처리
            .then(data => {

                // 받아온 제품 정보를 state에 저장
                setInfo(data.info);

            });
    }



    // 컴포넌트가 처음 실행될 때 1번 실행
    useEffect(()=>{

        // 제품 정보 조회 함수 호출
        getProduct();

    }, []);



    return <>

        {/* 제품번호 출력 */}
        <div>
            제품번호 : {info.PRODUCT_ID}
        </div>


        {/* 제품명 출력 */}
        <div>
            제품명 : {info.PRODUCT_NAME}
        </div>


        {/* 브랜드 출력 */}
        <div>
            브랜드 : {info.BRAND}
        </div>


        {/* 가격 출력 */}
        <div>
            가격 : {info.PRICE}
        </div>


        {/* 설명 출력 */}
        <div>
            설명 : {info.DESCRIPTION}
        </div>

    </>
}

export default ProductView;