import React, { useEffect, useState } from 'react';

const Index = () => {
  const [data,setData] = useState();
  //add post
  const fetchData = async () => {
    const url = 'http://localhost:4502/content/cq:graphql/monorepo-demo/endpoint.json';
    const username = 'admin';
    const password = 'admin';
    const resData = await fetch(url, {
      method: 'GET',
      headers: { 
        'content-type': 'application/json', 
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      },
      // body: JSON.stringify({
      //   query: `
      //     {
      //       monorepoDemoList  { items {buttonLabel}}
      //     }
      //   `
      // })
    });
    const jsonData = await resData?.json();
    await setData(jsonData?.data);
  }
  console.log(data,"data");
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='buttons-container'>
      <h1>Client Name: {data?.indigoList?.items?.[0]?.client_name}</h1>
    </div>
  );
};

export default Index;
