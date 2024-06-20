import React, { useState, useEffect } from "react";

const MusicPlayer = ({ songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(songs[currentSongIndex].file));

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkipForward = () => {
    const newIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(newIndex);
    audio.src = songs[newIndex].file;
    if (isPlaying) {
      audio.play();
    }
  };

  return (
    <div>
      <h2>Now Playing: {songs[currentSongIndex].title}</h2>
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={handleSkipForward}>Skip</button>
    </div>
  );
};

export default MusicPlayer;
