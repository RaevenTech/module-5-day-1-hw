import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'





const Job = ({ data }) => {
    
    
    return(

    <Row
        className="mx-0 mt-3 p-3"
        style={{ border: '2px solid black', borderRadius: 4 }}
    >
        <Col xs={3}>
            <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={9}>
            <Link to={data.url} target='_blank' rel="noreferrer">{data.title}</Link>
        </Col>
      
    </Row>
)
}

export default Job