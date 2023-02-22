import {urls} from "../../configs";
import {Link} from "react-router-dom";

const SelectedGenreMovie = ({movie}) => {
    const {title,poster_path,id} = movie;
    return (
        <Link to={id.toString()}>
            {/*<div className={css.Movie}>*/}
            Movie
            <div><p>{title}</p></div>
            <img src={`${urls.poster}${poster_path}`} alt={`${title}`}/>
            {/*</div>*/}
        </Link>

    );
};

export {SelectedGenreMovie};