import { useState } from "react";


function App(){
    let [name,setName]=useState();
    return<>
        <div>{name}</div>
        <div>
            <input value={name} onChange={(e)=>{
                setName(e.target.value);
            }}></input>
        </div>
    </>
}

export default App;