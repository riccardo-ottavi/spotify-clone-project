import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import RightPanel from "../components/RightPanel";
import Footer from "../components/Footer";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";

export default function Layout() {
  const {
    currentSong,
    togglePlay,
    isPlaying,
    volume,
    setVolume,
    progress,
    audioRef,
    artists,
    albums
  } = useAudioPlayerContext();

  return (
    <>

      <section className="header">
        <Header />
      </section>

      <section className="middle-big-box">

        <Sidebar />

        <div className="big-mid custom-scrollbar">
          <Outlet />
        </div>

        <RightPanel
          currentSong={currentSong}
          artists={artists || []}
          albums={albums }
        />
      </section>

      <section className="footer">
        <Footer
          progress={progress}
          togglePlay={togglePlay}
          isPlaying={isPlaying}
          audioRef={audioRef}
          volume={volume}
          setVolume={setVolume}
          currentSong={currentSong}
          artistName={artists.find(a => a.id === currentSong?.artistId)?.name || "Unknown"}    
          artistId={currentSong?.artistId}
          albumId={currentSong?.albumId} 
        />
      </section>
    </>
  );
}