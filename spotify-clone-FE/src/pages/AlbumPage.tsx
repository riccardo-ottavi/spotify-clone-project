import { useParams } from "react-router-dom";
import CollectionView from "./CollectionView";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import DetailHeader from "../components/DetailHeader";

export default function AlbumPage() {
  const { id } = useParams<{ id: string }>();
  const { albums } = useAudioPlayerContext();

  if (!id) return <p>Album non trovato</p>;

  const artistId = Number(id);
  const album = albums.find(a => a.id === artistId);

  if (!album) return <p>Artista non trovato</p>;

  return (
    <>
      <DetailHeader
        type={"album"}
        albumImage={album.image}
        title={album.title}
      />
      <CollectionView
        type="album"
        albumId={album.id}
        title={album.title}
        year={album.year}
        image={album.image} 
      />
    </>
  );
}