import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import { AudioPlayerProvider } from "./contexts/AudioPlayerContext";
import './App.css'
import AlbumPage from "./pages/AlbumPage";
import PlaylistPage from "./pages/PlaylistPage";
import ArtistPage from "./pages/ArtistPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <AudioPlayerProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="artist/:id" element={<ArtistPage />} />
            <Route path="album/:id" element={<AlbumPage />} />
            <Route path="playlist/:id" element={<PlaylistPage />} />
          </Route>
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </AudioPlayerProvider>
    </BrowserRouter>
  );
}

export default App;