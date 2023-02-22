import {Link} from "react-router-dom";

import {urls} from "../../configs";
import css from './Movie.module.css'
import Stars from "react-stars-display"

const Movie = ({movie}) => {
    const {title,poster_path,id,vote_average} = movie;
    return (
        <Link to={id.toString()} className={css.Movie}>
            {/*<div className={css.Movie}>*/}
            Movie
                <div className={css.Title}><p>{title}</p></div>
                <img src={`${urls.poster}${poster_path}`} alt={`${title}`}/>
            <Stars
                stars={vote_average/2}
                size={40} //optional
                spacing={20} //optional
                fill='#ea9c46' //optional
            />
            {/*</div>*/}
        </Link>

    );
};

export {Movie};