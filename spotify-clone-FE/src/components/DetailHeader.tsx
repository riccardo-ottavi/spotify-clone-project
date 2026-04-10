import { useEffect, useState } from "react";
import DetailButtons from "./DetailButtons";
import { useParams } from "react-router-dom";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import type { DetailHeaderProps, Song } from "../types/types";

export default function DetailHeader({ type, title, year, albumImage, playlistImage }: DetailHeaderProps) {
  const [albumSongs, setAlbumSongs] = useState<Song[]>([]);
  const [playlistSongs, setPlaylistSongs] = useState<Song[]>([]);
  const { id } = useParams<{ id: string }>();
  const { getSongsFromAlbum, getSongsFromPlaylist, songs } = useAudioPlayerContext();

  console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);

  useEffect(() => {
    const loadSongs = async () => {
      if (type === "album" && id) {
        setAlbumSongs(getSongsFromAlbum(Number(id)));
      }
      if (type === "playlist" && id) {
        const songs = await getSongsFromPlaylist(Number(id));
        setPlaylistSongs(songs);
      }
    };
    loadSongs();
  }, [type, id, getSongsFromAlbum, getSongsFromPlaylist]);

  if (type === "artist") {
    return (
      <>
        <div className="detail-header-artist">
          <h1>{title}</h1>
        </div>
        <DetailButtons songs={songs} />
      </>
    );
  }

  if (type === "album") {
    return (
      <>
        <div className="detail-header-album album">
          <img src={`${import.meta.env.VITE_API_URL}${albumImage}`} alt="" />
          <div className="text-infos">
            <span>Album</span>
            <h2>{title}</h2>
            <span>{year}</span>
          </div>
        </div>
        <DetailButtons songs={albumSongs} />
      </>
    );
  }

  if (type === "playlist") {
    return (
      <>
        <div className="detail-header-album album">
          {playlistImage && (
            <img src={`${import.meta.env.VITE_API_URL}${playlistImage}`} alt="" />
          )}
          <div className="text-infos">
            <span>Playlist</span>
            <h2>{title}</h2>
          </div>
        </div>
        <DetailButtons songs={playlistSongs} />
      </>
    );
  }

  return null;
}