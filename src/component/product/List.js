import { useEffect, useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

function ProductList() {

    let [list, setList] = useState([]);
    let navigate = useNavigate();

    function getList() {

        fetch("http://localhost:3010/product")
            .then(res => res.json())
            .then(data => {
                setList(data.list || []);
            });

    }

    useEffect(() => {
        getList();
    }, []);

    return <>
        <h2>제품 목록!</h2>
        <hr></hr>
        <div>
            <button onClick={()=>{
                navigate()
            }}></button>

        </div>


        

        <div>

            <table>

                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제품명</th>
                        <th>브랜드</th>
                        <th>가격</th>
                        <th>수정</th>
                    </tr>
                </thead>

                <tbody>
                    {list.map(item => {

                        return (
                            <tr key={item.PRODUCT_ID}>

                                <td>{item.PRODUCT_ID}</td>

                                <td>
                                    <a href="/"
                                        onClick={(e) => {

                                            e.preventDefault();

                                            navigate(
                                                "/product/view/" + item.PRODUCT_ID
                                            );

                                        }}
                                    >
                                        {item.PRODUCT_NAME}
                                    </a>
                                </td>

                                <td>{item.BRAND}</td>

                                <td>{item.PRICE}</td>
                                <td><button onClick={()=>{
                                    navigate("product/edit/"+item.PRODUCT_ID);
                                }}></button></td>

                            </tr>
                        );

                    })}
                </tbody>

            </table>

        </div>
    </>
}

export default ProductList;