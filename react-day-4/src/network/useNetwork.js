import { useState } from "react";




function useNetwork (){
    const [ data  , setData ] = useState([]);

    const [ isLoading , setIsLoading ] = useState(false);
    const [ error , setError ] = useState("");



  function  get(url){
    setIsLoading(false);
    setError("");
        fetch(url)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            setData(data);

        } )
        .catch(e=>{
            console.log(e);
            setError("Error Occured");
            setIsLoading(false);
        })
    }

    return { get , data, isLoading};
}


export default useNetwork;