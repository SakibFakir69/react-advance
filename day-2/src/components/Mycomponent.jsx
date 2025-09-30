


import React from 'react'

function Mycomponent({gaveMe,ele}) {

    console.log(gaveMe)


  return (
    <div>
        {gaveMe}
        {ele}

        <h1>This is my components </h1>
      
    </div>
  )
}

export default Mycomponent
