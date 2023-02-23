import css from './Genres.module.css'
import {Link} from "react-router-dom";

const Genres = ({genre}) => {

    const {name, id} = genre;

    return (
        <div className={css.Genres}>
            <Link to={id.toString()} className={css.GenresLink}>
                {name}
            </Link>
        </div>
    );
};

export {Genres};