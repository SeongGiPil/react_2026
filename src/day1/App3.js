import '../App.css';

function Head(props){
    return <>
        <h3>
            <a id="1234" href="/" onClick={(e)=>{
                e.preventDefault();
                // alert("안녕");
                props.onOutputText();
            }}>{props.title}</a>
        </h3>
    </>
}

function App(){
    return <>
        <Head title="헤더!" onOutputText={()=>{
            alert("첫번째 Head!")
        }}></Head>
        <Head title="리액트 재밌다!" onOutputText={()=>{
            console.log("두번째 Head");
        }}></Head>
        <Head title="피곤.." onOutputText={()=>{
            let result = window.confirm("확인 or 취소");
            if(result){
                alert("확인!")
            } else {
                alert("취소")
            }
        }}></Head>
    </>
}

export default App;