import NowPlaying from "./NowPlaying"
import EmptyScreen from "./EmptyScreen"
import type { Album, Artist, Song } from "../types/types";

type Props = {
    currentSong: Song | null;
    artists: Artist[];
    albums: Album[];
};


export default function RightPanel({ currentSong, artists, albums }: Props) {


    if (!currentSong) return <div className="right-mid"><EmptyScreen /></div>;

    const artist = currentSong
        ? artists.find(a => a?.id === currentSong?.artistId)
        : undefined;

    const album = currentSong && albums.find(a => a.id === currentSong.albumId);



    return (
        <div className="right-mid custom-scrollbar">
            {currentSong ? (
                <NowPlaying
                    image={currentSong.image}
                    title={currentSong.title}
                    artistName={artist?.name}
                    bio={artist?.bio}
                    album={album?.title}
                    albumId={album?.id}
                    artistPic={artist?.image?? ''}
                    artistId={artist?.id}
                />
            ) : (
                <EmptyScreen />
            )}
        </div>
    );
}