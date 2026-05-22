import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductView() {

    // URL 파라미터 가져오기
    let { productId } = useParams();

    // 제품 정보 저장
    let [info, setInfo] = useState({});



    // 제품 상세 조회
    function getProduct() {

        fetch("http://localhost:3010/product/" + productId)
            .then(res => res.json())
            .then(data => {

                console.log(data);

                setInfo(data.info);

            });

    }



    // 화면 시작 시 실행
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