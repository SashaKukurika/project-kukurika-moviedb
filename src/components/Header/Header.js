import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {useTheme} from "../../Hooks";

const Header = () => {

    const { setTheme } = useTheme()

    const handleLightThemeClick = () => {
        setTheme('light')
    }
    const handleDarkThemeClick = () => {
        setTheme('dark')
    }

    return (
        <div className={css.Header}>
            <NavLink to={'movies'}><div className={css.HeaderLink}>Movies</div></NavLink>
            <NavLink to={'genres'}><div className={css.HeaderLink}>Genres</div></NavLink>
            <NavLink to={'search'}><div className={css.HeaderLink}>Search</div></NavLink>
            <div>
                <button className={css.Btn} onClick={handleLightThemeClick}>Light</button>
                <button className={css.Btn} onClick={handleDarkThemeClick}>Dark</button>
            </div>
            <div className={css.User}><p>SK</p></div>
        </div>
    );
};

export {Header};