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
            <NavLink to={'movies'}>movies</NavLink>
            <NavLink to={'genres'}>genres</NavLink>
            <NavLink to={'search'}>search</NavLink>
            <div>
                <button onClick={handleLightThemeClick}>Light</button>
                <button onClick={handleDarkThemeClick}>Dark</button>
            </div>
            <img className={css.User} src="https://icons-for-free.com/iconfiles/png/512/avatar+human+people+profile+user+icon-1320168139431219590.png" alt="user"/>
        </div>
    );
};

export {Header};