// useEffect : 컴포넌트 실행 시 특정 작업 수행
// useState : 상태값(state) 관리
import { useEffect, useState } from "react";

// useParams : URL 파라미터 값 가져오기
import { useParams } from "react-router-dom";

function ProductView() {

    // URL 주소에서 productId 값 가져오기
    // 예 : /product/view/1
    let { productId } = useParams();

    // 제품 정보 저장용 state
    let [info, setInfo] = useState({});


    // 제품 상세 조회 함수
    function getProduct() {

        fetch("http://localhost:3010/product/" + productId)
            .then(res => res.json())
            .then(data => {

                // 서버 데이터 확인
                console.log(data);

                // 제품 정보 저장
                setInfo(data.info);

            });
    }


    // 화면 처음 실행 시 1번 실행
    useEffect(() => {

        getProduct();

    }, []);


    // 화면 출력
    return (
        <>
            <div>제품번호 : {info.PRODUCT_ID}</div>

            <div>상품명 : {info.PRODUCT_NAME}</div>

            <div>브랜드 : {info.BRAND}</div>

            <div>가격 : {info.PRICE}</div>

            <div>설명 : {info.DESCRIPTION}</div>
        </>
    );
}

export default ProductView;