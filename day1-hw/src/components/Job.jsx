import React from 'react'
import { Row, Col, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {connect} from "react-redux"

const mapDispatchToProps = dispatch =>({
dispatch
})


const Job = ({ data, dispatch }) => {
    const navigate = useNavigate()
    
    return(

    <Row
        className="mx-0 mt-3 p-3"
        style={{ border: '2px solid #00000043', borderRadius: 4 }}
    >
        <Col xs={3}>
            <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={9}>
            <Link to={data.url} target='_blank' rel="noreferrer">{data.title}</Link>
        </Col>
        <Badge variant="info" className="btn-addFav" onClick={()=> navigate("/favorites")}>add Fav</Badge>
    </Row>
)
}

export default connect(s => s, mapDispatchToProps)(Job);