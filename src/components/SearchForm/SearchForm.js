import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {searchValidator} from "../../validators";
import {movieAction} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import {Movie} from "../Movie/Movie";
import css from './SearchForm.module.css';

const SearchForm = () => {

    const dispatch = useDispatch();
    const {searchMovies} = useSelector(state => state.movies);

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: "onSubmit",
        resolver: joiResolver(searchValidator)
    });

    const search = async (searchWords) => {
        await dispatch(movieAction.searchMovie(searchWords));
        reset();
    };
    // todo pagination
    return (
        <div className={css.MainDiv}>
            <div className={css.FormDiv}>
                <form onSubmit={handleSubmit(search)}>
                    <input className={css.FormInput} type="text"
                           placeholder={'Find movie'} {...register('searchWords')}/>
                    <button className={css.FormBtn}>Search</button>
                </form>
            </div>
            {searchMovies && searchMovies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {SearchForm};