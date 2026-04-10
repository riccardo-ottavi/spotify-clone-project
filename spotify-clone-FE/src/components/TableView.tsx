import type { Song } from "../types/types"
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext"
import React from "react"

type Props = {
    songs: Song[],
    onClick?: () => void;
    playlistId: number | undefined
}

const TableView = React.memo(({ songs, playlistId }: Props) => {
    const { currentSong, playQueue, removeSongFromPlaylist } = useAudioPlayerContext();

    return (
        <div className="detail-cards-container">
            {songs.map((s, index) => {
                const isActive = currentSong?.id === s.id;

                return (
                    <div
                        key={`${s.id}-${index}`}
                        className={`detail-song-card ${isActive ? "active" : ""}`}
                        onClick={() => playQueue(songs, index)}
                    >
                        <div className="play-or-id">
                            <img className="detail-play" src="../play-solid-full-white.svg" alt="" />
                            <span className="detail-id">{index + 1}</span>
                        </div>

                        <img
                            src={s.image.startsWith('http') ? s.image : `${import.meta.env.VITE_API_URL}${s.image}`}
                            alt={s.title}
                        />

                        <span className={isActive ? "active-text underline" : "underline"}>
                            {s.title}
                        </span>
                        <img src="../trash-solid-full.svg" alt="" className="icon-box" onClick={(e) => {
                            e.stopPropagation();
                            if (playlistId !== undefined) {
                                removeSongFromPlaylist(playlistId, s.id);
                            }
                        }} />
                        <span className="absolute-right">
                            {s.duration}
                        </span>
                    </div>
                );
            })}
        </div>
    );
});

export default TableView