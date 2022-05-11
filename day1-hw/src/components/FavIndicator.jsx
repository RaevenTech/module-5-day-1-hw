import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state) => {
    return{
        favLength: state.favorite.content.length,
    }
}

const FavIndicator = () => {
    const navigate = useNavigate();

    return (
        <div className="fav-indicator">
            <Button className="fav-indicator__icon" color="info" onClick={() => navigate('/cartfavorite')}>
                0
            </Button>
        </div>
    )
}
default export FavIndicator;