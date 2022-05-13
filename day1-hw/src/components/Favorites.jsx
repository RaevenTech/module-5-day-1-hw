import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Job from './Job'
import { removeFav } from '../slices/cartFavorite/favSlice'


const mapStateToProps = (state) => state

const mapDispatchToProps =(dispatch)=> {
    return{
    removeFromFavProp: (company) => {
        dispatch(removeFav(company))
    }
}
}


export const Favorites = ({ data }) => {
   
  return (
      <>
      <Job />
    <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '2px solid green', borderRadius: 4 }}
>
    <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={9}>
        <Link to={data.url} target='_blank' rel="noreferrer">{data.title}</Link>
    </Col>
    <Badge variant="info" className="btn-addFav" onClick={()=> removeFav(data.company_name)}>Remove</Badge>
</Row>
</>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(Favorites)