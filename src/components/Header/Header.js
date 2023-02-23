import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {useTheme} from "../../Hooks";

const Header = () => {

    const { theme, setTheme } = useTheme()

    const handleLightThemeClick = () => {
        setTheme('light')
    }
    const handleDarkThemeClick = () => {
        setTheme('dark')
    }

    return (
        <div className={css.Header}>
            <NavLink to={'movies'}><div className={css.headerLink}>Movies</div></NavLink>
            <NavLink to={'genres'}><div className={css.headerLink}>Genres</div></NavLink>
            <NavLink to={'search'}><div className={css.headerLink}>Search</div></NavLink>
            <div>
                <button className={css.btn} onClick={handleLightThemeClick}>Light</button>
                <button className={css.btn} onClick={handleDarkThemeClick}>Dark</button>
            </div>
            <div className={css.User}><p>SK</p></div>
        </div>
    );
};

export {Header};