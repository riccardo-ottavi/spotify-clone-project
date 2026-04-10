import { useParams } from "react-router-dom";
import CollectionView from "./CollectionView";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";

export default function PlaylistPage() {
  const { id } = useParams<{ id: string }>();
  const { playlists, deletePlaylist, songs } = useAudioPlayerContext();

  if (!id) return <p>playlist non trovata</p>;

  const playListId = Number(id);
  const playlist = playlists.find(a => a.id === playListId);

  if (!playlist) return <p>playlist non trovata</p>;
  const playlistSongs = songs.filter(s =>
  playlist.songIds?.includes(s.id)  
);

  return (
  <>
  <p className="delete-playlist-button pointer" onClick={() => deletePlaylist(playlist.id)}>Elimina</p>
  <CollectionView
    type="playlist"
    playlistId={playlist.id}  
    title={playlist.name}
    image={playlist.image}
    songs={playlistSongs}
  />
  </>
);
}