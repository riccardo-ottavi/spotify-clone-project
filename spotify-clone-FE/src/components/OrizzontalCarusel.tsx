// components/CreatedForYouSection.tsx
import { useRef } from "react";
import SquaredCard from "./SquaredCard";
import type { Song, Artist } from "../types/types";
import { scrollHelper } from "../utils/scrollHelper";

interface Props {
  songs: Song[];
  artists: Artist[];
  onSongClick: (song: Song) => void;
}

export default function OrizzontalCarusel({ songs, artists, onSongClick }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section>
      <div className="title-section">
        <h2>Creato per: User</h2>
      </div>

      <div className="squared-cards-wrapper">
        <button className="scroll-left" onClick={() => containerRef.current && scrollHelper(containerRef as React.RefObject<HTMLDivElement>, "left")}>{"<"}</button>
        <div className="squared-cards-container" ref={containerRef}>
          {songs.map(c => (
            <SquaredCard
              key={c.id}
              image={c.image}
              title={c.title}
              artistName={artists.find(a => a.id === c.artistId)?.name || "Unknown"}
              onClick={() => onSongClick(c)}
            />
          ))}
        </div>
        <button className="scroll-right" onClick={() => containerRef.current && scrollHelper(containerRef as React.RefObject<HTMLDivElement>, "right")}>{">"}</button>
      </div>
    </section>
  );
}