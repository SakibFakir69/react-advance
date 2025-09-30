import React, { useEffect, useState } from "react";

function ApiData() {
  const [data, setData] = useState([]);
  // https://jsonplaceholder.typicode.com/todos

  // useEffect when fist mount call api
  // fetch api use useEffect

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos");
        const result = await data.json();
        setData(result);
        setLoading(true);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // show data in console
  console.log(data);
  console.log(loading , 'loading')

  return <div>{loading ? "loading...." : JSON.stringify(data)}</div>;
}

export default ApiData;
