import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Favorites = ({ data }) => {
  return (
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
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps =(dispatch)=> {
    return{
    addToFavProp: () => {
        dispatch(addToFav())
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)