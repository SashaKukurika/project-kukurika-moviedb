import {Link} from "react-router-dom";

import {urls} from "../../configs";
import css from './Movie.module.css'
import Stars from "react-stars-display"

const Movie = ({movie}) => {

    const {title, poster_path, id, vote_average} = movie;

    return (
        <Link to={id.toString()} className={css.card}>

            <div className={css.card2}>
                <div className={css.title}><p>{title}</p></div>
                <img src={`${urls.poster}${poster_path}`} alt={`${title}`}/>
                <div className={css.Stars}><Stars stars={vote_average / 2} size={30} spacing={20} fill={`#fff300`}/></div>
            </div>

        </Link>

    );
};

export {Movie};