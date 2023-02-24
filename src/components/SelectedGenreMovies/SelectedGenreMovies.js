import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {genresAction} from "../../redux";
import {SelectedGenreMovie} from "../SelectedGenreMovie/SelectedGenreMovie";
import css from './SelectedGenreMovies.module.css';

const SelectedGenreMovies = ({id}) => {

    const dispatch = useDispatch();
    const {genreMovies} = useSelector(state => state.genres);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(genresAction.getById({id:id, page: query.get('page')}));
    }, [dispatch, query, id])

    return (
        <div className={css.BgMovies}>
            SelectedGenreMovies
            <div className={css.Movies}>
                {genreMovies.map(movie => <SelectedGenreMovie key={movie.id} movie={movie}/>)}
            </div>

            <div className={css.Pagination}>

                {/*<button disabled={!(+query.get('page') > 1)}*/}
                {/*        onClick={() => setQuery(query => ({page: +query.get('page') + 5}))}>*/}
                {/*    {+query.get('page')-5}*/}
                {/*</button>*/}

                <button className={css.Button} disabled={!(+query.get('page') > 1)}
                        onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>
                    {'<'}
                </button>

                <div className={css.PageNumber}>{+query.get('page')}</div>

                <button className={css.Button} disabled={!(+query.get('page') < 500)}
                        onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>
                    {'>'}
                </button>

                {/*<button disabled={!(+query.get('page') < 500)}*/}
                {/*        onClick={() => setQuery(query => ({page: +query.get('page') + 5}))}>*/}
                {/*    {+query.get('page')+5}*/}
                {/*</button>*/}
            </div>
        </div>
    );
};

export {SelectedGenreMovies};