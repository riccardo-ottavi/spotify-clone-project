import type { Song } from "../types/types";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";

type Props = {
    songs: Song[];
}

export default function DetailButtons({ songs }: Props) {
    const { playQueue } = useAudioPlayerContext();

    const handlePlay = () => {
        if (songs.length > 0) playQueue(songs, 0);
    };

    const handleShuffle = () => {
        if (songs.length > 0) {
            const shuffled = [...songs].sort(() => Math.random() - 0.5);
            playQueue(shuffled, 0);
        }
    };

    return (
        <div className="detail-buttons buttons-gradient">
            <div className="play-hover-big"></div>

            <img 
                src="../play-solid-full.svg" 
                alt="Play" 
                onClick={handlePlay}
                className="clickable"
            />

            <img 
                src="../shuffle-solid-full.svg" 
                alt="Shuffle" 
                onClick={handleShuffle} 
                className="clickable"
            />

            <span className="follow">Segui</span>

            <div className="info-button">
                <img src="../circle-solid-full.svg" alt="" />
                <img src="../circle-solid-full.svg" alt="" />
                <img src="../circle-solid-full.svg" alt="" />
            </div>
        </div>
    )
}