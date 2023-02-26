import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Movie} from "../Movie/Movie";
import {movieAction} from "../../redux";
import css from './Movies.module.css';
import {useSearchParams} from "react-router-dom";

const Movies = () => {

    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieAction.getAll({page: query.get('page')}))
    }, [dispatch, query]);

    return (
        <div className={css.BgMovies}>
            <div className={css.Movies}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>

            <div className={css.Pagination}>

                <button className={css.Button} disabled={!(+query.get('page') > 1)}
                        onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>
                    {'<'}
                </button>

                <div className={css.PageNumber}>{+query.get('page')}</div>

                <button className={css.Button} disabled={!(+query.get('page') < 500)}
                        onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>
                    {'>'}
                </button>

            </div>
        </div>
    );
};

export {Movies};