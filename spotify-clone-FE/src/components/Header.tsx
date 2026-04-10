import { Link } from "react-router-dom"
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import { useRef, useState, useEffect } from "react";

export default function Header() {

    const { searchQuery, setSearchQuery, searchResults, playQueue, artists, addSongToPlaylist, playlists } = useAudioPlayerContext();
    const [selectedSongId, setSelectedSongId] = useState<number | null>(null);
    const artistMap = Object.fromEntries(artists.map(a => [a.id, a]));
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setSelectedSongId(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleAddClick = (songId: number) => {
        setSelectedSongId(songId);
    };

    const handlePlaylistSelect = (playlistId: number) => {
        if (selectedSongId !== null) {
            addSongToPlaylist(playlistId, selectedSongId);
            setSelectedSongId(null);
        }
    };

    return (
        <header>
            <Link to={'/'}>
                <div>
                    <img src="../spoty-logo.jfif" alt="" />
                </div>
            </Link>
            <div className="header-mid">
                <Link to={'/'}><img src="../house-solid-full.svg" alt="" /></Link>
                <div className="search-bar">
    <img src="../magnifying-glass-solid-full.svg" alt="" className="search-bar-icon" />
    <input
        type="text"
        placeholder="Cosa vuoi ascoltare?"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
    />
    <div className="search-results custom-scrollbar">
        {searchQuery && searchResults.length > 0 ? (
            searchResults.map((song) => {
                const artist = artistMap[song.artistId];
                return (
                    <div
                        key={song.id}
                        className="search-result-card"
                        onClick={() => playQueue([song], 0)}
                    >
                        <div className="result-card-cover">
                            <img src={song.image.startsWith('http') ? song.image : `${import.meta.env.VITE_API_URL}${song.image}`} alt={song.title} />
                        </div>
                        <div className="result-card-text">
                            <h5 className="underline">{song.title}</h5>
                            <span className="underline">{artist?.name}</span>
                        </div>
                        <img
                            src="../circle-plus-solid-full.svg"
                            alt=""
                            className="suggest-add"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleAddClick(song.id);
                            }}
                        />
                    </div>
                );
            })
        ) : searchQuery ? (
            <p>Nessun risultato trovato</p>
        ) : null}
    </div>

    {selectedSongId !== null && (
        <div className="playlist-dropdown-right custom-scrollbar" ref={dropdownRef}>
            {playlists.map(p => (
                <div
                    key={p.id}
                    className="playlist-dropdown-item"
                    onClick={() => handlePlaylistSelect(p.id)}
                >
                    <img src={p.image.startsWith('http') ? p.image : `${import.meta.env.VITE_API_URL}${p.image}`} alt={p.name} className="playlist-thumb" />
                    <span>{p.name}</span>
                </div>
            ))}
        </div>
    )}

    <img src="../box-solid-full.svg" alt="" className="crate-icon border-left" />
</div>
            </div>
            <div className="header-right">
                <div className="explore">
                    <h3 className="pointer">Esplora premium</h3>
                </div>
                <div className="download-button pointer">
                    <img src="../arrow-down-solid-white.svg" alt="" className="circle-gray" />
                    <p>Installa app</p>
                </div>
                <img  className="pointer" src="../bell-solid-full.svg" alt="" />
                <img className="pointer" src="../people-group-solid-full.svg" alt="" />
                <div className="account-icon">
                    R
                </div>
            </div>

        </header>
    )
}