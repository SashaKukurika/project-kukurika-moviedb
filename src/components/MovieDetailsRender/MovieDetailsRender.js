import {urls} from "../../configs";
import css from './MovieDetailRender.module.css'
import {YoutubeEmbed} from "../YoutubeEmbed/YoutubeEmbed";

const MovieDetailsRender = ({movie: {movie}}) => {

    const {
        title,
        overview,
        poster_path,
        release_date,
        vote_average,
        genres,
        id,
        original_language,
        popularity,
        vote_count
    } = movie;

    return (
        <div className={css.Movie}>

            <div className={css.MovieImg}>
                <img src={`${urls.poster}${poster_path}`} alt={`${title}`}/>
                <div className={css.MovieGenres}>
                    {genres.map(genre => <div className={css.MovieGenre} key={genre.id}>{genre.name}</div>)}
                </div>
            </div>

            <div className={css.MovieDetails}>
                <div><h2>{title}</h2></div>
                <div><h3>Description: {overview}</h3></div>
                <div><h3>Release date: {release_date}</h3></div>
                <div><h3>Original language: {original_language}</h3></div>
                <div><h3>Average score: {vote_average}</h3></div>
                <div><h3>Number of votes: {vote_count}</h3></div>
                <div><h3>Number of views: {popularity}</h3></div>
            </div>

            <div className={css.MovieYoutube}>Trailer<YoutubeEmbed embedId={id.toString()} key={id}/></div>

        </div>
    );
};

export {MovieDetailsRender};