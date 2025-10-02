


import React, { useEffect } from 'react'
import useNetwork from '../../network/useNetwork'



function List({onProductSelect}) {

    const {get,data,isLoading} =  useNetwork();

    useEffect(()=>{
    
        get('https://jsonplaceholder.typicode.com/todos')

    },[]);

    console.log(data);


  return (
    <div>
      
      {
        data.map((d)=>(
            <div onClick={()=> onProductSelect(d.id)}>{d.id}  {d.title} </div>
        ))
      }
    </div>
  )
}

export default List
