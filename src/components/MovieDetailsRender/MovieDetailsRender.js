import {urls} from "../../configs";
import css from './MovieDetailRender.module.css'
import {Genres} from "../Genres/Genres";
import {YoutubeEmbed} from "../YoutubeEmbed/YoutubeEmbed";

const MovieDetailsRender = ({movie: {movie}}) => {

    const {title, overview, poster_path, release_date, vote_average, genres} = movie;
    console.log(genres);

    return (
        <div className={css.Movie}>
            {/*<YoutubeEmbed embedId="rp8FUnikaqk" />*/}
            <img src={`${urls.poster}${poster_path}`} alt={`${title}`}/>
            <div>{title}</div>
            <div>{overview}</div>
            <div>{release_date}</div>
            <div>{vote_average}</div>

            {genres.map(genre => <Genres genre={genre} key={genre.id}/>)}

        </div>
    );
};

export {MovieDetailsRender};