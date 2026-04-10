import { createContext, useContext, type ReactNode } from "react";
import { useAudioPlayer } from "../hooks/useAudioPlayer";
import type { AudioContextType } from "../types/types";

const AudioPlayerContext = createContext<AudioContextType | null>(null);

export function AudioPlayerProvider({ children }: { children: ReactNode }) {
  const audio = useAudioPlayer();

  return (
    <AudioPlayerContext.Provider value={audio}>
      {children}
      <audio ref={audio.audioRef} />
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayerContext() {
  const context = useContext(AudioPlayerContext);
  if (!context) 
    throw new Error(
      "useAudioPlayerContext must be used inside AudioPlayerProvider"
    );
  return context;
}