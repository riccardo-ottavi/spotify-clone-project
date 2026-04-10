import { useNavigate } from "react-router-dom";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import { useState } from "react";

type Props = {
  image: string;
  title: string;
  artistName?: string;
  bio?: string;
  album?: string;
  artistPic: string;
  albumId?: number;
  artistId: number | undefined;
};

export default function NowPlaying({
  image,
  title,
  artistName,
  bio,
  album,
  artistPic,
  albumId,
  artistId
}: Props) {
  const { queue, currentSong, artists } = useAudioPlayerContext();
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


  const currentIndex = queue?.findIndex(s => s.id === currentSong?.id) ?? -1;
  const artistMap = Object.fromEntries(artists.map(a => [a.id, a]));
  const upcomingSongs = currentIndex >= 0 ? queue.slice(currentIndex + 1, currentIndex + 2) : [];
  const [showQueue, setShowQueue] = useState(false);
  const { setCurrentSong } = useAudioPlayerContext()

  return (
    <div className="now-playing">
      <div className="now-playing-header">
        <div style={{ display: "flex" }}>
          <img src="../minimize-solid-full.svg" alt="" className="hide" />
          {album && <h3>{album}</h3>}
        </div>
        <div className="side-icons-container">
          <div className="dots">
            <img src="../circle-solid-full.svg" alt="" className="hide " />
            <img src="../circle-solid-full.svg" alt="" className="hide" />
            <img src="../circle-solid-full.svg" alt="" className="hide" />
          </div>
          <img src="../expand-solid-full.svg" alt="" className="hide" />
        </div>
      </div>
      <div className="track-infos" onClick={goToAlbum}>
        <div className="track-infos-cover">
          <img
                            src={image.startsWith('http') ? image : `${import.meta.env.VITE_API_URL}${image}`}
                            alt={title}
                        />
        </div>
        <div className="track-infos-text">
          <h3>{title}</h3>
          {artistName && <span>{artistName}</span>}
          <img src="../circle-plus-solid-full.svg" alt="" className="add-fav-queue" />
        </div>
      </div>

     
      <div className="about-artist" onClick={goToArtist}>
        <h4 className="absolute">Informazioni sull'artista</h4>
        <img src={`${import.meta.env.VITE_API_URL}${artistPic}`} alt="" />
        <div className="about-text">
          {artistName && <h4>{artistName}</h4>}
          <div className="about-social">
            <p>325.235.234 ascoltatori mensili</p>
            <span className="follow">Segui</span>
          </div>
          {bio && <p>{bio}</p>}
        </div>
      </div>
 



      <div className="next-in-queue">
        <div className="next-in-queue-window">
          <h3>Prossimo in coda</h3>
          <span className="open-queue" onClick={() => setShowQueue(true)}>
            Apri coda
          </span>
        </div>

        {!showQueue && (
          <>
            {upcomingSongs.slice(0, 1).map(song => {
              const artist = artistMap[song.artistId];
              return (
                <div key={song.id} className="detail-card queue-card">
                  <img
                            src={song.image.startsWith('http') ? song.image : `${import.meta.env.VITE_API_URL}${song.image}`}
                            alt={song.title}
                        />
                  <div className="queue-text">
                    <h4 className="underline">{song.title}</h4>
                    <span className="artist underline">{artist?.name}</span>
                  </div>
                </div>)
            })}
          </>
        )}

        {showQueue && (
          <>
            {queue.slice(currentIndex + 1).map(song => {
              const artist = artistMap[song.artistId];
              return (
                <div key={song.id} className="detail-card queue-card">
                  <img
                            src={song.image.startsWith('http') ? song.image : `${import.meta.env.VITE_API_URL}${song.image}`}
                            alt={song.title}
                            onClick={() => setCurrentSong(song)}
                        />
                  <div className="queue-text ">
                    <h4 className="underline">{song.title}</h4>
                    <span className="artist underline" onClick={goToArtist}>{artist?.name}</span>
                  </div>
                </div>
              );
            })}

            <span className="close-queue" onClick={() => setShowQueue(false)}>
              Chiudi coda
            </span>
          </>
        )}
      </div>

    </div>

  );
}