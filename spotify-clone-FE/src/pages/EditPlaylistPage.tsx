import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import { useState, useEffect } from "react";
import TableView from "../components/TableView";
import type { Song } from "../types/types";
import { useParams } from "react-router-dom";
import DetailButtons from "../components/DetailButtons";
import EditPlaylistModal from "../components/EditPlaylistModal";

export default function EditPlaylistPage() {
  const {
    playlists,
    addSongToPlaylist,
    songs,
    albums,
    getSongsFromPlaylist,
  } = useAudioPlayerContext();

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playlistSongs, setPlaylistSongs] = useState<Song[]>([]);

  const { id } = useParams<{ id: string }>();
  const playlistId = Number(id);

  const playlist = playlists.find(p => p.id === playlistId);

 
  useEffect(() => {
    if (!playlistId) return;

    const fetchSongs = async () => {
      try {
        const fetchedSongs = await getSongsFromPlaylist(playlistId);
        setPlaylistSongs(fetchedSongs);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSongs();
  }, [playlistId, getSongsFromPlaylist]);

 
  const availableSongs = songs.filter(s =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    !playlistSongs.some(ps => ps.id === s.id)
  );

  const getImageSrc = (image?: string) => {
  if (!image) return "/images/default-song.png"; // fallback
  return image.startsWith("http") ? image : `${import.meta.env.VITE_API_URL}${image}`;
};

  return (
    <div>
      {isModalOpen && playlist && (
        <EditPlaylistModal
          playlistId={playlist.id}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <div className="detail-header-album album">
        <img
          src={getImageSrc(playlist?.image)}
          alt=""
          onClick={() => setIsModalOpen(true)}
          style={{ cursor: "pointer" }}
        />

        <div className="text-infos">
          <span>Playlist</span>
          <h2 onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}>
            {playlist?.name}
          </h2>
          <p className="pointer" onClick={() => setIsModalOpen(true)} >{playlist?.notes}</p>
        </div>
      </div>

      <DetailButtons songs={playlistSongs} />
      <hr />

      <div className="container-page">
        {playlistSongs.length === 0 ? (
          <h3>Cerchiamo qualcosa per la tua playlist</h3>
        ) : (
          <TableView songs={playlistSongs} playlistId={playlist?.id}/>
        )}

        <input
          placeholder="Cerca brani da aggiungere"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="playlist-inner-input"
        />

        <div className="search-results-playlist">
          {searchQuery ? (
            availableSongs.length > 0 ? (
              availableSongs.map(song => {
                const album = albums.find(a => a.id === song.albumId);

                return (
                  <div
                    key={song.id}
                    className="playlist-page-result-card"
                    onClick={async () => {
                      try {
                        await addSongToPlaylist(playlistId, song.id);

                      
                        setPlaylistSongs(prev => [...prev, song]);

                        setSearchQuery("");
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <div className="playlist-page-result-card-cover">
                      <img
                        src={getImageSrc(song.image)}
                        alt={song.title}
                      />

                      <div className="playlist-page-result-card-text">
                        <h5 className="underline">{song.title}</h5>
                        <span className="underline gray-text">
                          {album?.title || "Album sconosciuto"}
                        </span>
                      </div>
                    </div>

                    <span>{album?.title}</span>
                    <div className="add-to-playlist">Aggiungi</div>
                  </div>
                );
              })
            ) : (
              <p>Nessun brano trovato</p>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}