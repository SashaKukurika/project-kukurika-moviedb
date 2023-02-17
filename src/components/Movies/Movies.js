import {useEffect, useState} from "react";
import {moviesService} from "../../services";
import {Movie} from "../Movie/Movie";

const Movies = () => {
// todo show all and after do slices
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        moviesService.getAll().then(({data}) => console.log(data))
    }, [setMovies]);

    return (
        <div>
            data
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};