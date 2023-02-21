import css from "../Movie/Movie.module.css";
import {urls} from "../../configs";

const SearchedMovie = ({movie}) => {
    const {title, poster_path} = movie;
    return (
        <div className={css.Movie}>
            <div className={css.Title}><p>{title}</p></div>
            <img src={`${urls.poster}${poster_path}`} alt={`${title}`}/>
        </div>
    );
};

export {SearchedMovie};