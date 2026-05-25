// useRef : input 태그와 연결해서 값 제어
// useEffect : 렌더링 후 특정 작업 실행
import { useRef, useEffect } from "react";

// useParams : URL 파라미터 값 가져오기
import { useParams } from "react-router-dom";

function ProductEdit(){

    // URL 주소에서 productId 값 가져오기
    let {productId} = useParams();

    // input 태그 연결용 ref
    let id = useRef("");
    let name = useRef("");
    let brand = useRef("");
    let price = useRef("");
    let desc = useRef("");

    // 제품 정보 조회 함수
    function getProduct(){
        fetch("http://localhost:3010/product/" + productId)
            .then(res => res.json())
            .then(data => {
                id.current.value = data.info.PRODUCT_ID;
                name.current.value = data.info.PRODUCT_NAME;
                brand.current.value = data.info.BRAND;
                price.current.value = data.info.PRICE;
                desc.current.value = data.info.DESCRIPTION;
            });
    }

    // 처음 화면 열릴 때 제품 정보 조회
    useEffect(()=>{
        getProduct();
    }, []);

    return <>
        <h2>제품수정</h2>

        <div>번호 : <input ref={id}></input></div>
        <div>제품명 : <input ref={name}></input></div>
        <div>브랜드 : <input ref={brand}></input></div>
        <div>가격 : <input ref={price}></input></div>
        <div>설명 : <input ref={desc}></input></div>
    </>
}

export default ProductEdit;