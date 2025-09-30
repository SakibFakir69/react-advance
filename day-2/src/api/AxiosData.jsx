


import React, { useEffect, useState } from 'react'
import axios from 'axios'
function AxiosData() {

    const [ post , setPost ] = useState([]);

    useEffect(()=>{
        
        const getAxios = async ()=>{
            const data = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setPost(data.data);
        }
        getAxios();

    },[])

  return (
    <div>
        {JSON.stringify(post)}
      
    </div>
  )
}

export default AxiosData
