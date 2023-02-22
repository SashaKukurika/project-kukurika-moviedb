import {urls} from "../../configs";
import css from './Movie.module.css'
import {Link} from "react-router-dom";

const Movie = ({movie}) => {
    const {title,poster_path,id} = movie;
    return (
        <Link to={id.toString()} className={css.Movie}>
            {/*<div className={css.Movie}>*/}
                <div className={css.Title}><p>{title}</p></div>
                <img src={`${urls.poster}${poster_path}`} alt={`${title}`}/>
            {/*</div>*/}
        </Link>

    );
};

export {Movie};