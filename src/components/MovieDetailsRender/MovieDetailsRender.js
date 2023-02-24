import {urls} from "../../configs";
import css from './MovieDetailRender.module.css'
import {Genres} from "../Genres/Genres";
import {YoutubeEmbed} from "../YoutubeEmbed/YoutubeEmbed";

const MovieDetailsRender = ({movie: {movie}}) => {

    const {title, overview, poster_path, release_date, vote_average, genres,id} = movie;

    console.log(id)
    return (
        <div className={css.Movie}>
                <img src={`${urls.poster}${poster_path}`} alt={`${title}`}/>
                <div className={css.MovieGenres}>
                    {genres.map(genre => <div className={css.MovieGenre}>{genre.name}</div>)}
                </div>

            <div>{title}</div>
            <div>{overview}</div>
            <div>{release_date}</div>
            <div>{vote_average}</div>

            <YoutubeEmbed embedId={id.toString()} key={id}/>

        </div>
    );
};

export {MovieDetailsRender};