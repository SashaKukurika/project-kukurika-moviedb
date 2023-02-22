import {useParams} from "react-router-dom";

import {SelectedGenreMovies} from "../../components";

const SelectedGenresPage = () => {

    const {id} = useParams();

    return (
        <div>
            SelectedGenresPage
            <SelectedGenreMovies id={id}/>
        </div>
    );
};

export {SelectedGenresPage};