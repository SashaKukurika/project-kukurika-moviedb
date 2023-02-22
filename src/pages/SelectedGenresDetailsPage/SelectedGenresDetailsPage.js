import {useParams} from "react-router-dom";
import {MovieDetails} from "../../components";

const SelectedGenresDetailsPage = () => {
    const {movieId} = useParams();

    return (
        <div>
            SelectedGenresDetailsPage
            <MovieDetails id={movieId}/>
        </div>
    );
};

export {SelectedGenresDetailsPage};