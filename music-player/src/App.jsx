import React, { useState } from "react";
import MusicPlayer from "./MusicPlayer";

const App = () => {
  
  const [songs] = useState([
    { title: "Song 1", file: "2023-10-29 23-15-06.mkv" },
    { title: "Song 2", file: "2023-10-29 23-15-06.mkv" },
    { title: "Song 3", file: "2023-10-29 23-15-06.mkv" }
  ]);

  return (
    <div className="App">
      <h1>Music Player</h1>
      <MusicPlayer songs={songs} />
    </div>
  );
};

export default App;
