




import React, { useState,createContext } from 'react'

import useScreenSize from './hooks/useScreenSize';
import Child from './Child';
export const MyContext = createContext();

function App() {

  const [ count , setCount ] = useState(0);
  const {value} = useScreenSize();
  console.log(value);


  return (
    <div>
      <h1>Welcome to day 5 </h1>

      <p>Height = {value.height}     {value.width} Width</p>

      
      <button onClick={()=>setCount(count+1)}>+</button>
      {count}
       <button onClick={()=> setCount(count-1)}>-</button>

       

       <MyContext.Provider value={{count}}>
        <Child/>

       </MyContext.Provider>
      
    </div>
  )
}







function Parent(){

  return (
    <div>
      <h1>This is parent component</h1>
    </div>
  )
}

export default App
