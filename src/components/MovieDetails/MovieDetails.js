import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieAction} from "../../redux";
import {MovieDetailsRender} from "../MovieDetailsRender/MovieDetailsRender";
import css from './MovieDetails.module.css';

const MovieDetails = ({id}) => {
    const dispatch = useDispatch();
    const {movieById} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(movieAction.getById({id}));
    }, [dispatch, id])

    return (
        <div className={css.MovieDetails}>
            {movieById && movieById.map(movie => <MovieDetailsRender movie={{movie}} key={movie.id}/>)}
        </div>
    );
};

export {MovieDetails};