import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieAction} from "../../redux";
import './YoutubeEmbed.module.css';

const YoutubeEmbed = (id) => {

    const {embedId} = id;
    const dispatch = useDispatch();
    const {videoById} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(movieAction.getVideoById(embedId));
    }, [dispatch, embedId])

    return (
        <div className="video-responsive">
            {videoById[0]?.key &&
                <iframe
                    width="900"
                    height="480"
                    src={`https://www.youtube.com/embed/${videoById[0]?.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            }

        </div>)
};

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export {YoutubeEmbed};