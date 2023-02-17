import css from './App.css';
import {Movies} from "./components/Movies/Movies";
const App = () => {
    return (
        <div className={css.App}>
            <Movies/>
        </div>
    );
};

export {App};