import {Genres} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genresAction} from "../../redux";

const GenresPage = () => {

    const dispatch = useDispatch();
    const {genresList} = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(genresAction.getAll())
    }, [dispatch]);

    return (
        <div>
            {genresList && genresList.map(genre => <Genres genre={genre} key={genre.id}/> )}
        </div>
    );
};

export {GenresPage};