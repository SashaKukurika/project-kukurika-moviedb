import css from './Genres.module.css'
const Genres = ({genre}) => {

    const {name} = genre;

    return (
        <div className={css.Genre}>
            {name}
        </div>
    );
};

export {Genres};