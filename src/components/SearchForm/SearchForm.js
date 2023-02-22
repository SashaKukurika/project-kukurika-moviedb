import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {searchValidator} from "../../validators";
import {movieAction} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import {Movie} from "../Movie/Movie";

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
    // todo щоб зникали попередні пошуки
    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input type="text" placeholder={'find movie'} {...register('searchWords')}/>
                <button>Search</button>
            </form>

            {searchMovies && searchMovies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {SearchForm};