

import React, { useRef, useState } from 'react'
import Mycomponent from './components/Mycomponent'
import ApiData from './api/ApiData';
import AxiosData from './api/axiosData';

function App() {


   const [ count , setCount ] = useState(0);


   


  return (
    <div>

   

      <h1>This is app components</h1>

      <p>{count}</p>
      <button onClick={()=> setCount(count+1)}>Add</button>

      <Sum/>
      <Sum2/>
      <ApiData/>
      <AxiosData/>
      

      
    </div>
  )
}



function Sum(){
  const [ result , setResult ] = useState(0);
  const num = useRef();
    const num2 = useRef();

  const addMe = ()=>{
    console.log(num ,'1');
    console.log(num.current , '2');
    console.log(num.current.value, '3')
  
    const ans = Number(num.current.value+num2.current.value);
    setResult(ans);


    
    document.getElementById("result").innerText= ""


  }

  return (
    <div>
      <input ref={num} type='text'/>+
          <input ref={num2} type='text'/>

          <button onClick={addMe}>Add</button>

          <div>
            Result : <span id='result'>{result}</span>
          </div>
    </div>
  )
  
}

// handel use state


const Sum2  = ()=>{
  const [ result , setResult ] = useState(0);

  const [ num , setNum ] = useState(0);
  const [ num2, setNum2 ] = useState(0);

  const handelSum = (e)=>{
    setNum(e.target.value);
   

  }
  const handelSum2 = (e)=>{
 
    setNum2(e.target.value)

  }


  return (
    <div>
         <input value={num} onInput={handelSum}  type='text'/>+
          <input value={num2} onInput={handelSum2}  type='text'/>

          <button onClick={handelSum}>Add</button>

          <div>
            Result : <span id='result'>{result}</span>
          </div>

    </div>
  )

}


export default App
