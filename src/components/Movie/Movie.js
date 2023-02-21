import {urls} from "../../configs";
import css from './Movie.module.css'

const Movie = ({movie}) => {
    const {title,poster_path} = movie;
    return (
        <div className={css.Movie}>
            <div className={css.Title}><p>{title}</p></div>
            <img src={`${urls.poster}${poster_path}`} alt={`${title}`}/>
        </div>
    );
};

export {Movie};