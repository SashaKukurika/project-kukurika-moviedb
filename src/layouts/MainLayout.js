import {Outlet} from "react-router-dom";
import {Header, SearchForm} from "../components";

const MainLayout = () => {
    return (
        <div>
            Main Layout
            <Header/>
            {/*<SearchForm/>*/}
            <Outlet/>
        </div>
    );
};

export {MainLayout};