import { useParams } from "react-router-dom";
import CollectionView from "./CollectionView";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import DetailHeader from "../components/DetailHeader";

export default function ArtistPage() {
  const { id } = useParams<{ id: string }>();
  const { artists } = useAudioPlayerContext();

  if (!id) return <p>Artista non trovato</p>;

  const artistId = Number(id);
  const artist = artists.find(a => a.id === artistId);

  if (!artist) return <p>Artista non trovato</p>;

  return (
    <>
      <DetailHeader
        type={"artist"}
        artistImage={artist.image}
        title={artist.name}
      />
      <CollectionView
        type="artist"
        artistId={artistId}
        title={artist.name}
        bio={artist.bio}
        image={artist.image}
      />
    </>
  );
}