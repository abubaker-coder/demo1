import React, { useState } from 'react'
import Data from '../Data/Data.json'
import Dataprocard from './Dataprocard'

const Datapro = () => {

    const [products, setProducts] = useState(Data.products)
    products.map(prod =>{
        console.log(prod);
        
    })
        
  return (
    <div>
      <Dataprocard/>
    </div>
  )
}

export default Datapro
