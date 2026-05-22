function ProductEdit(){

    let{productId}=useParams();
    function getProduct(){
        fetch("http://localhost:3030/product/"+productId)
        .then(res=>res.json())
        .then(data=>{
            id.current.value=data.info.PRODUCT_ID;
            name.current.value=data.info.PRODUCT_NAME;
        
        })
    }
    return<>
    <h2>제품추가</h2>
    </>
}

export default ProductEdit;