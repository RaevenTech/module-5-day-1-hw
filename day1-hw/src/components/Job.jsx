import React from 'react'
import { Row, Col , Badge} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const Job = ({ data }) => (
    <Row
        className="mx-0 mt-3 p-3"
        style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
        <Col xs={3}>
            <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={9}>
            <Link to={data.url} target='_blank' rel="noreferrer">{data.title}</Link>
        </Col>
        <Badge variant="info" className="btn-addFav">Favorite</Badge>
    </Row>
)

export default connect(Job)