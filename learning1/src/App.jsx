


import { meta } from '@eslint/js';
import React, { useEffect, useState } from 'react'
// this is function component
// component are building block we can re use 
// components build with function and elements 


let firstLauch = true
function App() {

  console.log(import.meta.env)

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const port= import.meta.env.VITE_PORT;
  console.log(backendUrl , ' backend url ');
  console.log(port,'port')

  const [ count, setcount ] = useState(0);


  const handleIncrase = () =>{
    setcount(count+1);
  }


  useEffect(()=>{

   if(firstLauch)
   {
     fetch('')
    .then((res)=> res.json())
    .catch((error)=> console.log(error))
    firstLauch=false;
    console.log("first run");
    
   }

    console.log('component mount');
    console.log("this component add to dom");
    setcount(100);

    return ()=>{
      console.log("parent components ")
    }

  },[])

  console.log(firstLauch);





  return (
    <div>
      
      {
        count%2==0 ? <Child/> : ' this is odd '
      }
     

     <button onClick={handleIncrase}>{count}</button>


      
    </div>
  )
}

export default App



const Child = ()=>{
  console.log("child");

  useEffect(()=>{

    console.log("child component mount");


    return ()=>{
      console.log("unmount child")
    }


  },[])

  return(
    <div>
<p>iam from child comp</p>
    </div>
  )
}


console.log(<App/>) // componenet call