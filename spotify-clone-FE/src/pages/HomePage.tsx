import MyNavBar from "../components/MyNavBar";
import OrizzontalCard from "../components/OrizzontalCard";
import VerticalCard from "../components/VerticalCard";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import Links from "../components/Links";
import OrizzontalCarusel from "../components/OrizzontalCarusel";

export default function HomePage() {

    const { setCurrentSong, songs, artists, albums } = useAudioPlayerContext();

    return (
        <section className="middle-big-box">
            <div className="big-mid2 custom-scrollbar">
                <MyNavBar />
                <div className="gradient">
                    <div className='orizzontal-cards-container'>
                        {songs?.slice(0, 8).map((c) => (
                            <OrizzontalCard
                                key={c.id}
                                image={c.image}
                                title={c.title}
                                onClick={() => setCurrentSong(c)}
                            />
                        ))}
                    </div>
                </div>
                <OrizzontalCarusel
                    songs={songs}
                    artists={artists}
                    onSongClick={setCurrentSong}
                />
                <div className="vertical-cards-container">
                    {albums?.map((a) => (
                        <VerticalCard key={a.id} image={a.image} title={a.title} />
                    ))}
                </div>
                <hr />
                <Links />
                <hr />
            </div>
        </section>
    )
}