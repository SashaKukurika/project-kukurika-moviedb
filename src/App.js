import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {
    GenresPage,
    MovieDetailsPage,
    MoviesPage,
    NotFoundPage,
    SearchMoviePage,
    SelectedGenresDetailsPage,
    SelectedGenresPage
} from "./pages";


const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>

                <Route index element={<MoviesPage/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
                <Route path={'/:id'} element={<MovieDetailsPage/>}/>

                <Route path={'genres'} element={<GenresPage/>}/>
                <Route path={'genres/:id'} element={<SelectedGenresPage/>}/>
                <Route path={'genres/:id/:movieId'} element={<SelectedGenresDetailsPage/>}/>

                <Route path={'search'} element={<SearchMoviePage/>}/>

                <Route path={'search/:id'} element={<MovieDetailsPage/>}/>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>

        </Routes>
    );
};

export {App};