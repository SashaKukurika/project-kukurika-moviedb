import axios from "axios";

import {urls} from "../configs";

const posterService = {
    getByPath: (path) => axios.get(`${urls.poster}${path}`)
};

export {posterService};