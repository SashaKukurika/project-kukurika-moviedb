import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Genres} from "../../components";
import {genresAction} from "../../redux";
import css from './GenresPage.module.css';

const GenresPage = () => {

    const dispatch = useDispatch();
    const {genresList} = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(genresAction.getAll())
    }, [dispatch]);

    return (
        <div className={css.GenresPage}>
            {genresList && genresList.map(genre => <Genres genre={genre} key={genre.id}/>)}
        </div>
    );
};

export {GenresPage};