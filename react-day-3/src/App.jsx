



import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import MyReducer from './your-components/MyReducer';
import { useRandomValue } from './hooks/useRandomID';
  let effect = 0;
function App() {


  const [ count , setCount ] = useState(0);
  const [ msg , setMsg ] = useState("update count");
  const myButton = useRef();
  const {result}= useRandomValue(10,20);
  console.log(result, " result")




  useEffect(()=>{
    effect++;
    console.log(effect , " effect run")

    console.log("mount")

    if(count>3)
    {
      setMsg("hey you win");
    }



  return ()=>{
    myButton.current="button 2";
    console.log("component unmount");

   

  }


  },[count])
  // gave depdency 
  // depdency update useEffect run 
  // every count useEffect run 

  const handleCLick = ()=>{
    setCount(count+1);
  }


  console.log(this , ' this ')



  return (
    <div>

      {count }
      {msg}
      <button onClick={handleCLick}>click count</button>
      <h1>Day 3 in react</h1>
      <MyReducer/>
      <button ref={myButton}>Button</button>

      <MemorizeChild count={count}/>
      
    </div>
  )
}



let memeo = 0;
const Child = ()=>{

  const [num  , setNum ] = useState(0);


  console.log("render child");

  const x = useMemo(function(){
    console.log("inside memo")

    for(let i=0; i<100; i++){
      console.log("loop running",i)

    };
    memeo++;
    console.log(memeo, " memeo cout")

    return num*2;
    

  },[num])


  const handleClick  = useCallback(()=>{

    console.log("call back")

    setNum((prev)=> prev+1);

  },[])

  console.log(memeo);


  return (
    <div>
      <button onClick={handleClick}>{x}</button>
    </div>
  )
}


const MemorizeChild = memo(Child);



export default App
