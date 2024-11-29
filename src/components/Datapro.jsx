import React, { useState } from 'react'
import Data from '../Data/Data.json'

const Datapro = () => {

    const [products, setProducts] = useState(Data.products)
    products.map(prod =>{
        console.log(prod);
        
    })
        
  return (
    <div>
      <h1>Data hello</h1>
    </div>
  )
}

export default Datapro
