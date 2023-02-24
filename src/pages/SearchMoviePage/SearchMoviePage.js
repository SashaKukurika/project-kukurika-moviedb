import {ScrollToTopButton, SearchForm} from "../../components";
import css from './SearchMoviePage.module.css';

const SearchMoviePage = () => {
    return (
        <div className={css.SearchMoviePage}>
            <SearchForm/>
            <ScrollToTopButton/>
        </div>
    );
};

export {SearchMoviePage};