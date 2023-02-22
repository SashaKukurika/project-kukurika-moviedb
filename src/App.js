import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {GenresPage, MovieDetailsPage, MoviesPage, NotFoundPage, SearchMoviePage} from "./pages";


const App = () => {
    // todo кнопка відразу до гори
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
                <Route path={'genres'} element={<GenresPage/>}/>
                <Route path={'search'} element={<SearchMoviePage/>}/>

                <Route path={'search/:id'} element={<MovieDetailsPage/>}/>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>

        </Routes>
    );
};

export {App};