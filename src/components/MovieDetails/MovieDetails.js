import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieAction} from "../../redux";
import {MovieDetailsRender} from "../MovieDetailsRender/MovieDetailsRender";

const MovieDetails = ({id}) => {
    const dispatch = useDispatch();
    const {movieById} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(movieAction.getById({id}));
    }, [dispatch])

    return (
        <div>
            {movieById && movieById.map(movie => <MovieDetailsRender movie={{movie}} key={movie.id}/>)}
        </div>
    );
};

export {MovieDetails};