import { addToFav, removeFromFav } from "../slices/cartFavorite/favSlice";
import {connect} from "react-redux";
import {Row,Badge,Col} from "react-bootstrap";
import { Link } from "react-router-dom";


const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) =>({
    addToFav: (company) => dispatch(addToFav(company)),
    removeFromFav: (company) => dispatch(removeFromFav(company))
})
 const SearchResults = ({ data, addToFav, removeFromFav, favorite }) => {
     const isFav = favorite.content.find(fav => fav.company_name === data.company_name)
     const toggleFav = () => {
         isFav ? removeFromFav(data.company_name) : addToFav(data.company_name)
     }
     return(
         
    <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '2px solid #00000043', borderRadius: 4 }}
>
    <Col xs={3}>
        {isFav?(<Badge variant="info" className="btn-addFav" onClick={toggleFav}>Add Fav</Badge>)
        :(<Badge variant="warning" className="btn-removeFav" onClick={toggleFav}>Remove Fav</Badge>)}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={9}>
        <Link to={data.url} target='_blank' rel="noreferrer">{data.title}</Link>
    </Col>
    
  </Row>
     )
 }
       export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);