import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return{
        favLength: state.favorite.content.length,
    }
}

const FavIndicator = ({ favLength }) => {
    const navigate = useNavigate();

    return (
        <div className="fav-indicator">
            <Button className="fav-indicator__icon" color="info" onClick={() => navigate('/cartfavorite')}>
                {favLength}
            </Button>
        </div>
    )
}
export default connect(mapStateToProps)(FavIndicator);