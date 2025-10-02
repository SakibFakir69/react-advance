


import React from 'react'

import { lazy,Suspense } from 'react';
// eslint-disable-next-line no-undef

import Cart from './cart/Cart';
const List = lazy(()=> import("./list/List"))


function Home() {
  return (
    <div>
        <h1>Home</h1>
        
      <Suspense fallback={<div>
        Loading 
      </div>}>
        <List/>
      </Suspense>

      <Cart/>
      

    </div>
  )
}

export default Home
