import {useParams} from "react-router-dom";

import {ScrollToTopButton, SelectedGenreMovies} from "../../components";
import css from './SelectedGenresPage.module.css';

const SelectedGenresPage = () => {

    const {id} = useParams();
//todo почати стилізувати тут
    return (
        <div className={css.SelectedGenresPage}>
            <SelectedGenreMovies id={id}/>
            <ScrollToTopButton/>
        </div>
    );
};

export {SelectedGenresPage};