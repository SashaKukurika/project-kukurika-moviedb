import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'movies'}>movies</NavLink>
            <NavLink to={'genres'}>genres</NavLink>
            <NavLink to={'search'}>search</NavLink>
            <img className={css.User} src="https://icons-for-free.com/iconfiles/png/512/avatar+human+people+profile+user+icon-1320168139431219590.png" alt="user"/>
        </div>
    );
};

export {Header};