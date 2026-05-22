// React에서 사용하는 Hook import
import { useEffect, useState } from "react";

// URL 파라미터 사용용 import
import { useParams } from "react-router-dom";

function ProductView() {

  // URL의 productId 값 가져오기
  // 예: /product/view/3 이면 productId = 3
  let { productId } = useParams();

  // 제품 상세정보 저장용 state
  let [info, setInfo] = useState({});



  // 제품 상세 조회 함수
  function getInfo() {

    // 서버에 제품번호 전달해서 조회 요청
    fetch("http://localhost:3010/product/" + productId)

      // JSON 형태로 변환
      .then(res => res.json())

      // 데이터 사용
      .then(data => {

        console.log(data);

        // 제품정보 저장
        setInfo(data.info);

      });

  }



  // 화면 처음 실행 시 1번 호출
  useEffect(() => {

    getInfo();

  }, []);




  // 화면 출력
  return (
    <>

      <h2>제품 상세보기</h2>

      <hr />

      {/* 제품번호 */}
      <div>
        제품번호 : {info.PRODUCT_ID}
      </div>

      {/* 제품명 */}
      <div>
        제품명 : {info.PRODUCT_NAME}
      </div>

      {/* 브랜드 */}
      <div>
        브랜드 : {info.BRAND}
      </div>

      {/* 가격 */}
      <div>
        가격 : {info.PRICE}
      </div>

      {/* 설명 */}
      <div>
        설명 : {info.DESCRIPTION}
      </div>

    </>
  );

}

// 외부에서 사용할 수 있도록 export
export default ProductView;