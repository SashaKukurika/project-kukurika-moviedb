import {Link} from "react-router-dom";

import css from './Genres.module.css'

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