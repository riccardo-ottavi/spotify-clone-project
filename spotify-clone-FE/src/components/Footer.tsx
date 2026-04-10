import type { FooterProps } from "../types/types";
import { useState } from "react";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import { useNavigate } from "react-router-dom";

export default function Footer({
    togglePlay,
    isPlaying,
    audioRef,
    volume,
    setVolume,
    currentSong,
    progress,
    artistName,
    albumId,
    artistId
}: FooterProps) {

    const [dragProgress, setDragProgress] = useState<number | null>(null);
    const { playNextSong, playPreviousSong, formatTime, repeat, toggleRepeat, setShuffle, shuffle } = useAudioPlayerContext()

    const navigate = useNavigate();

    const goToAlbum = () => {
    if (albumId) {
      navigate(`/album/${albumId}`);
    }
  };

  const goToArtist = () => {
    if (artistId) {
      navigate(`/artist/${artistId}`);
    }
  };


    const currentTime = audioRef.current?.currentTime || 0;
    const duration = audioRef.current?.duration || 0;


    return (
        <>
            <footer>
                <div className="left-footer">
                    <img src={currentSong?.image.startsWith('http') ? currentSong.image : `${import.meta.env.VITE_API_URL}${currentSong?.image}`} alt="" onClick={goToArtist}/>
                    <div className="track-text-infos">
                        <h4 className="underline" onClick={goToAlbum}>{currentSong?.title}</h4>
                        <span className="underline" onClick={goToArtist}>{artistName}</span>
                    </div>
                    <img src="../circle-plus-solid-full.svg" alt="" className="icon" />
                </div>
                <div className="mid-footer main-player">
                    <div className="buttons">
                        <img
                            src={shuffle ? "../shuffle-green.svg" : "../shuffle-solid-full.svg"}
                            alt=""
                            onClick={() => setShuffle(!shuffle)}
                            className="pointer"
                        />
                        <img
                            src="../backward-solid-full.svg"
                            alt=""
                            onClick={playPreviousSong}
                            className="pointer"
                        />
                        <img
                            src={isPlaying ? "../circle-pause-solid-full.svg" : "../circle-play-solid-full.svg"}
                            alt=""
                            id="main-play"
                            onClick={togglePlay}
                            className="pointer"
                        />
                        <img
                            src="../forward-solid-full.svg"
                            alt=""
                            onClick={playNextSong}
                            className="pointer"
                        />
                        <img
                            src={
                                repeat === "none"
                                    ? "../repeat-solid-full.svg"
                                    : repeat === "all"
                                        ? "../repeat-green.svg"
                                        : "../repeat-green2.svg"
                            }
                            alt="repeat"
                            onClick={toggleRepeat}
                            className="pointer"
                        />
                    </div>
                    <div className="control-bar">
                        <span>{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            min={0}
                            max={100}
                            value={dragProgress !== null ? dragProgress : progress}
                            onChange={(e) => setDragProgress(Number(e.target.value))}
                            onMouseUp={(e) => {
                                if (!audioRef.current) return;
                                const newTime = (Number(e.currentTarget.value) / 100) * audioRef.current.duration;
                                audioRef.current.currentTime = newTime;
                                setDragProgress(null);
                            }}
                            onTouchEnd={(e) => {
                                if (!audioRef.current) return;
                                const newTime = (Number(e.currentTarget.value) / 100) * audioRef.current.duration;
                                audioRef.current.currentTime = newTime;
                                setDragProgress(null);
                            }}
                            className="pointer"
                        />
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>
                <div className="right-footer">
                    <img src="../microphone-solid-full.svg" alt="" className="pointer"/>
                    <img src="../stack-exchange-brands-solid-full.svg" alt="" className="pointer"/>
                    <img src="../computer-solid-full.svg" alt="" className="pointer"/>
                    <img src="../volume-solid-full.svg" alt="" className="pointer"/>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={(e) => setVolume(Number(e.target.value))}
                        className="pointer"
                    />
                    <img src="../chromecast-brands-solid-full.svg" alt="" className="pointer"/>
                    <img src="../expand-solid-full.svg" alt="" className="pointer"/>
                </div>
            </footer>
        </>
    )
}