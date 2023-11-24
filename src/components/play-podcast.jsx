import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import PlayPodcastStyles from '../style/play-podcast.module.scss';
import podcastData from '../data/podcast.json';
import '../style/reset.scss';
import play from '../image/play.svg'
import musicClick from '../image/music-prev.svg'
const PlayPodcast = () => {
    const { id } = useParams();
    const location = useLocation();
    const [volume, setVolume] = useState(100);
    const [pause, setPause] = useState(true)
    const audioRef = useRef(null);
    const { podcastData: currentPodcastData } = location.state || {};

    const currentPodcastIndex = podcastData.findIndex((podcast) => podcast.id === parseInt(id, 10));
    const nextPodcastIndex = (currentPodcastIndex + 1) % podcastData.length;
    const prevPodcastIndex = (currentPodcastIndex - 1 + podcastData.length) % podcastData.length;

    const nextPodcastId = podcastData[nextPodcastIndex].id;
    const prevPodcastId = podcastData[prevPodcastIndex].id;

    const volumeMove = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);

        if (audioRef.current) {
            audioRef.current.volume = newVolume / 100;
        }
    };
    const handlePause = () => {
        setPause(!pause)
        if (pause) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
    }
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
        }
    }, [volume]);

    return (
        <>
            <section>
                <div className={PlayPodcastStyles.listen}>
                    <div className={PlayPodcastStyles.listen__portret}>
                        <img src={currentPodcastData.image} alt="listen image" />
                    </div>
                    <div className={PlayPodcastStyles.listen__block}>
                        <h1>{currentPodcastData.title}</h1>
                        <p>{currentPodcastData.description}</p>
                        <div className={PlayPodcastStyles.listen__player}>
                            <Link to={`/play-podcast/${prevPodcastId}`} state={{ podcastData: podcastData[prevPodcastIndex] }}>
                                <button type="button">
                                    <img src={musicClick} alt="music" />
                                </button>
                            </Link>
                            <audio
                                ref={audioRef}
                                src={currentPodcastData.audioUrl}
                                volume={volume / 100}
                                className={`${PlayPodcastStyles['listen__audio']}`}
                                controlsList="nodownload nofullscreen"
                            ></audio>
                            <button className={PlayPodcastStyles.listen__play} onClick={handlePause} type="button"><img src={play} alt="play" /></button>
                            <Link to={`/play-podcast/${nextPodcastId}`} state={{ podcastData: podcastData[nextPodcastIndex] }}>
                                <button className={PlayPodcastStyles.listen__goPodcast} type="button">
                                    <img src={musicClick} alt="music" />
                                </button>
                            </Link>
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={100}
                            step={1}
                            value={volume}
                            onChange={volumeMove}
                            className={PlayPodcastStyles.listen__sound}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default PlayPodcast;
