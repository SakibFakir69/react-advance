


import React, { useContext } from 'react'
import { MyContext } from './App'

function Child() {

    const {count}= useContext(MyContext);


  return (
    <div>
    
   child count  {count}
      
    </div>
  )
}

export default Child
