import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Viewer = ({ match: { params } }) => {

    const [episodeId, setEpisoceId] = useState(parseInt(params.episodeId));
    const [episode, setEpisode] = useState();

    useEffect(() => {
        console.log(episodeId)
        _getEpisodeList();
    }, [])

    useEffect(() => {
        console.log(episode);
    }, [episode])

    const _getEpisodeList = () => {
        axios.get('/dummy/episode_list.json')
            .then(data => {
                setEpisode(data.data.webtoonEpisodes.find(episode => (
                    episode.id === episodeId
                )))
            })
    }

    return (
        <div className="wrap_viewer">
            { episode ? (
                <div>
                    <div className="top_viewer">
                        {episode.title}
                        <Link to={`/webtoon/${episode.webtoonId}`} className="btn_close">X</Link>
                    </div>
                    <div className="wrap_images">
                        {episode.images.map((img, index) => (
                            <img key={index} src={img} />))}
                    </div>

                </div>
            ) : (
                <div>Loading...</div>
            )
            }
        </div>

    );
}
export default Viewer;