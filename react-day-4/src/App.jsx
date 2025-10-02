/* eslint-disable no-unused-vars */



import React, { useEffect, useState , createContext, useContext, memo, useId, lazy, Suspense  } from 'react'


import {createPortal} from 'react-dom'

import Cart from './pages/cart/Cart';


import Deatils from './pages/deatils/Deatils';
import { Link, Outlet } from 'react-router';

const Mycontext = createContext();

const List = lazy(()=> import("./pages/list/List"))


function App() {

  const [ will , setWill ] = useState(null);

  const [ selectedProduct , setSelectedProduct ] = useState(null);
  const [ isCartPage , setIsCartPage  ] = useState(false);


  




  useEffect(()=>{

    console.log("parent component run");

  },[])

  return (
    <div>

      <nav style={{display:"flex", gap:"10px"}}>
        <Link to={'/'}>Home</Link>
        <Link to={'/products'}>Products</Link>
        <Link to={'/about'}>About</Link>
      </nav>

      <Outlet/>


      

      {selectedProduct && <Deatils/> }




      
      {/* <Mycontext.Provider value={{setWill}}>
            {will}

            <ChileMemo/>
            <ChildMemo2/>
            <AnotherChild/>
         <Test name="  name"/>
      </Mycontext.Provider> */}
      
    </div>
  )
}


// portal 

function AnotherChild(){

  const [ show , setShow ] = useState(true);

  function handelShowDialog (){
    setShow((prev)=>!prev);
  }




  return (
    <div>
      another child
      <button onClick={handelShowDialog}>Show dailog</button>

      {
        show &&  createPortal(<div onClick={handelShowDialog}>
          iam portal

        </div>,document.body)
      }
    </div>
  )


}

// hoc -> high order components 
// take another component as a argument and return new component

function SuperPower(Comp){

  return function Power(props)
  {
    return (
      <div>
        <Comp {...props}/>
      </div>
    )
  }

}

function Hello ({name, age}){
  return(
    <div>
      hello world
      nin
      {name}
      {age}
    </div>
  )
}
const Test = SuperPower(Hello);




// hoc 
const Child =  ()=>{
  console.log("render child 1");
  const id = useId();
  const {setWill} = useContext(Mycontext);


  useEffect(()=>{
 
    console.log("child component run 1 ");
  

    return ()=>{
      console.log("child component unmount 1")
    }

  },[])

  return (
    <div id={id}>
      <h1>this is child components </h1>
      <button onClick={()=> setWill("gave every thing to me child")}>gave me</button>
    </div>
  )

}

const ChileMemo = memo(Child);

const Child2 =  ()=>{
  console.log("render child 2")

  const { setWill}= useContext(Mycontext);

  useEffect(()=>{

    console.log("child component run 2");
  

    return ()=>{
      console.log("child component unmount 2 ")
    }

  },[])

  return (
    <div>
      <h1>this is child components  </h1>
      <button onClick={()=> setWill("gave everything to me")}>gave me 2 </button>
    </div>
  )

}

const ChildMemo2 = memo(Child2);



export default App
