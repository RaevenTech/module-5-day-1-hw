import { addToFav, removeFromFav } from "../slices/cartFavorite/favSlice";
import {connect} from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) =>({
    addToFav: (company) => dispatch(addToFav(company)),
    removeFromFav: (company) => dispatch(removeFromFav(company))
})
 const SearchResults = ({ data, addToFav, removeFromFav,favorites }) => {
