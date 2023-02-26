import {useParams} from "react-router-dom";

import {MovieDetails} from "../../components";

const SelectedGenresDetailsPage = () => {

    const {movieId} = useParams();

    return (
        <div>
            <MovieDetails id={movieId}/>
        </div>
    );
};

export {SelectedGenresDetailsPage};