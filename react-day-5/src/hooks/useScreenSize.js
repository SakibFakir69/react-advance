


import React, { useEffect, useState } from 'react'

function useScreenSize() {

  const [value, setValue] = useState({
    height: "",
    width: ""
  })

  useEffect(() => {

    setValue({
      height: window.innerHeight,
      width: window.innerWidth
    })


    window.addEventListener("resize", () => {
      setValue({
        height: window.innerHeight,
        width: window.innerWidth
      })
    })


    return () => {
      window.removeEventListener("resize", () => {
        setValue({
          height: window.innerHeight,
          width: window.innerWidth
        })
      })
    }



  }, [])

  return { value };



}

export default useScreenSize
