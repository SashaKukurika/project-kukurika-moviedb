import {FaArrowUp} from 'react-icons/fa';

import css from './ScrollToTopButton.module.css'

const ScrollToTopButton = () => {

    const handleClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <button
            className={css.ScrollBtn}
            title="Наверх"
            onClick={handleClick}
        >
            <FaArrowUp/>Go Up<FaArrowUp/>
        </button>
    );
};

export {ScrollToTopButton};
