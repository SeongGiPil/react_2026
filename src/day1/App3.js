import './App.css';

function Head(props){
    return(
        <>
            <h3>
                <a 
                    id="1234" 
                    href="/" 
                    onClick={(e)=>{
                        e.preventDefault();

                        alert(e.target.id);

                        props.onOutputText();
                    }}
                >
                    {props.title}
                </a>
            </h3>
        </>
    );
}

function App(){
    return(
        <>
            <Head 
                title="헤더!" 
                onOutputText={()=>{
                    alert("첫번째 Head!");
                }}
            />

            <Head 
                title="리엑트재밌다" 
                onOutputText={()=>{
                    alert("두번째 Head");
                }}
            />

            <Head 
                title="피곤.." 
                onOutputText={()=>{
                    let result = window.confirm("진짜 피곤해?");
                    
                    if(result){
                        alert("확인");
                    }else{
                        alert("취소");
                    }
                }}
            />
        </>
    );
}

export default App;