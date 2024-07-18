import React, { useEffect } from 'react';

const Index = () => {
  // get a post "GET"
  const fetchData = async () => {
    const data = await fetch('https://graphqlzero.almansi.me/api', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        query: `
        {
          user(id: 1) {
            id
            username
            email
            address {
              geo {
                lat
                lng
              }
            }
          }
        }
        `
      })
    })
    const resData = await data.json();
    console.log(resData,'resData');
    return resData;
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className='buttons-container'>
      <button className='btn pt-4 pb-4 pr-8 pl-8 fs-4 primary-bg md-success-bg border-danger w-100 md-w-50 xl-w-25' type='button'>Primar</button>
      <button className='btn pt-4 pb-4 pr-8 pl-8 fs-6 secondary-bg border-danger w-100 md-w-50 xl-w-25' type='button'>Seconday</button>
      <button className='btn pt-4 pb-4 pr-8 pl-8 fs-8 success-bg border-danger w-100 md-w-50 xl-w-25' type='button'>Success</button>
      <button className='btn pt-4 pb-4 pr-8 pl-8 fs-10 danger-bg border-danger w-100 md-w-50 xl-w-25' type='button'>Danger</button>
      <button className='btn pt-4 pb-4 pr-8 pl-8 fs-12 warning-bg border-danger w-100 md-w-50 xl-w-25' type='button'>Warning</button>
      <button className='btn pt-4 pb-4 pr-8 pl-8 fs-14 info-bg border-danger w-100 md-w-50 xl-w-75' type='button'>Info</button>
      <button className='btn pt-4 pb-4 pr-8 pl-8 fs-16 light-bg border-danger w-100 md-w-50 xl-w-50' type='button'>Light</button>
      <button className='btn pt-4 pb-4 pr-8 pl-8 fs-18 dark-bg white-color border-info w-100 md-w-50 xl-w-50' type='button'>Dark</button>
      <button className='btn pt-4 pb-4 pr-8 pl-8 fs-20 link-bg border-info w-100 md-w-50 xl-w-100' type='button'>Link</button>
      <button className='btn pt-4 pb-4 pr-8 pl-8 fs-22 white-bg dark-color border-info w-100 md-w-50 xl-w-100' type='button'>White</button>
    </div>
  )
}

export default Index;