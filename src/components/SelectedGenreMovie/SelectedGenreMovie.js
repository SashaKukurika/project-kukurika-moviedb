import {Link} from "react-router-dom";
import Stars from "react-stars-display";

import {urls} from "../../configs";
import css from "../Movie/Movie.module.css";

const SelectedGenreMovie = ({movie}) => {

    const {title, poster_path, id, vote_average} = movie;

    return (
        <Link to={id.toString()} className={css.Card}>

            <div className={css.Card2}>
                <div className={css.Title}><p>{title}</p></div>
                <img src={`${urls.poster}${poster_path}`} alt={`${title}`}/>
                <div className={css.Stars}><Stars stars={vote_average / 2} size={30} spacing={20} fill={`#fff300`}/></div>
            </div>

        </Link>

    );
};

export {SelectedGenreMovie};