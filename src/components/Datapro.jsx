import React, { useState } from 'react'
import Data from '../Data/Data.json'
import Dataprocard from './Dataprocard'
import { Container, Row, Col } from 'reactstrap'

const Datapro = () => {

    const [products, setProducts] = useState(Data.products)
   
        
  return (
    <div>
      <Container>
      <Row xs="2">
           <Col xs={12} sm={12} md={6} lg={3} className="my-3"> 
                <Dataprocard/>
           </Col>
           <Col xs={12} sm={12} md={6} lg={3} className="my-3"> 
                <Dataprocard/>
           </Col>
           <Col xs={12} sm={12} md={6} lg={3} className="my-3"> 
                <Dataprocard/>
           </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Datapro
