import css from './Genres.module.css'
import {Link} from "react-router-dom";
const Genres = ({genre}) => {

    const {name,id} = genre;

    return (
        <Link to={id.toString()} className={css.Genre}>
            {name}
        </Link>
    );
};

export {Genres};